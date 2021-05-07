/* eslint-disable no-nested-ternary */
export default (str, n) =>
  str ? (str.length >= n ? `${str.substr(0, n)}...` : str) : null;
