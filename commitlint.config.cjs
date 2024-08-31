/**
 * A configuration for commitlint.
 * @see {@link https://commitlint.js.org/#/} for details.
 */

module.exports = {
  extends: ['@commitlint/config-conventional'],
  'body-max-line-length': [0, 'always'],
};
