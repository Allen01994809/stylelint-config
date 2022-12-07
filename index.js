/** @format */

module.exports = {
  semi: true,
  printWidth: 100,
  tabWidth: 2, // インデントのスペースの数を指定
  useTabs: false, // スペースではなくタブで行をインデントする
  singleQuote: false, // シングルクオートかダブルクオートか
  quoteProps: "consistent", // ref https://zenn.dev/ikura1/articles/96e62cc166dba3d64bc8#%E8%A3%9C%E8%B6%B3
  jsxSingleQuote: false, // jsxの場合 hoge="fuga" にするか hoge='fuga' にするかどうか
  trailingComma: "all",
  bracketSpacing: true,
  jsxBracketSameLine: true,
  arrowParens: "always",
  // 0行目から9000行目までフォーマット
  rangeStart: 0,
  rangeEnd: 9000,
  endOfLine: "lf", // 改行の文字コードを指定
  embeddedLanguageFormatting: "auto", // Prettierがファイルに埋め込まれた引用コードをフォーマットするかどうかを制御

  // 将来的に細かい設定をしたい時のために一応
  insertPragma: true,
  // parser: "none", // ref https://qiita.com/takeshisakuma/items/bbb2cd2f1c65de70e363#parser
  // filepath: "none",
};
