module.exports = {
  plugins: [
    // stylelintにprettierの設定を読み込むためのプラグイン
    "stylelint-prettier",
    // displayプロパティの値によって無視されるプロパティを記載していないか検知するルールを追加するプラグイン
    "stylelint-declaration-block-no-ignored-properties",
  ],
  extends: [
    // プロパティの記述順に関するルール
    "stylelint-config-recess-order",
    // 一般的なルール
    "stylelint-config-standard",
    "stylelint-config-prettier",
    // prettierと連携するためのルール
    "stylelint-prettier/recommended",
    // prettier設定と重複するルールを打ち消すルール
    "stylelint-config-prettier",
  ],
  rules: {
    'no-nonstandard': true, // https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction/
    'no-overrides': true, // https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction/
  }
};
