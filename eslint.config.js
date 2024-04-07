// import globals from "globals";
// import pluginJs from "@eslint/js";
// import tseslint from "typescript-eslint";
// import pluginVue from "eslint-plugin-vue";


// export default [
//   {languageOptions: { globals: globals.browser }},
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommended,
//   ...pluginVue.configs["flat/essential"],
// ];



export default [
  {
    rules: {
      // 防止定义的变量未被使用
      "no-unused-vars": "error",
      // 防止使用未声明的变量
      "no-undef": "error"
    }
  }
];