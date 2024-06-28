import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs", globals: { node: true } } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];
