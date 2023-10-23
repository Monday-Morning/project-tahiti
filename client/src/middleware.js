import { NextResponse } from 'next/server';

export async function middleware(request) {
  try {
    const [, , articleId] = request.nextUrl.pathname.split('/');

    if (!articleId) {
      const url = request.nextUrl.clone();
      url.pathname = '/500';
      return NextResponse.rewrite(url);
    }

    const cookies = {
      firebaseToken: request.cookies?.get('firebaseToken'),
    };

    const queryString = `query getArticleByID { getArticleByID(id: "${articleId}") { id articleType title createdAt updatedAt }}`;

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/v1/graph?query=${queryString}`,
      {
        headers: cookies.firebaseToken
          ? {
              Authorization: cookies.firebaseToken,
              'Content-Type': 'application/json',
            }
          : {
              'Content-Type': 'application/json',
            },
      },
    ).then((res) => {
      return res.json();
    });

    if (
      response?.errors?.some((error) =>
        ['FORBIDDEN', 'NOT_FOUND'].includes(error?.message),
      )
    ) {
      const url = request.nextUrl.clone();
      url.pathname = '/404';
      return NextResponse.rewrite(url);
    }

    return NextResponse.next();
  } catch (error) {
    const url = request.nextUrl.clone();
    url.pathname = '/500';
    return NextResponse.rewrite(url);
  }
}

export const config = {
  matcher: '/article/:articleId/:articleSlug?',
};
