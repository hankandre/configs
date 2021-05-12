/**
 * Lifted from Kent C. Dodds https://github.com/kentcdodds/eslint-config-kentcdodds/blob/main/utils.js
 */
const mapDeprecatedRules = (deprecatedRules) =>
  Object.fromEntries(deprecatedRules.map((rule) => [rule, "off"]));
