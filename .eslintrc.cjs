module.exports = {
 root: true,
 env: { browser: true, es2021: true },
 extends: [
   "eslint:recommended",
   "plugin:react/recommended",
   "plugin:react-hooks/recommended",
   "plugin:jsx-a11y/recommended",
   "prettier"
 ],
 parserOptions: {
   ecmaVersion: "latest",
   sourceType: "module"
 },
 rules: {
   "react/react-in-jsx-scope": "off",
   "no-unused-vars": "error"
 }
};
