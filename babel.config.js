module.exports = api => {
  api.cache(true);
  return {
    presets: ["@babel/env", "@babel/typescript"],
    plugins: [
      "babel-plugin-transform-typescript-metadata",
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      ["@babel/proposal-class-properties", { loose: true }],
      "@babel/plugin-proposal-numeric-separator",
      "@babel/proposal-object-rest-spread"
    ]
  };
};
