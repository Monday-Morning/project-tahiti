export const getUserSlug = (fullName) => fullName.replace(/\W/g, '_').replace(/_{2,}/g, '_').toLowerCase();
