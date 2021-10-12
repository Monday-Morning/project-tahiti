export default (author) => {
    let authorName = author.split(' ');
    if (authorName.length > 1) {
      authorName.splice(Math.round(authorName.length / 2), authorName.length);
    }
    authorName = authorName.reduce((a, b) => `${a} ${b}`);
    return authorName;
};
