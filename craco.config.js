const { ModuleFederationPlugin } = require("webpack").container;

console.log("Remote Button from CRA frm config file");

module.exports = {
  webpack: {
    configure: (config) => {
      config.output.publicPath = "http://localhost:3002/"; // 👈 remote CRA app ka URL
      config.plugins.push(
        new ModuleFederationPlugin({
          name: "remoteApp",
          filename: "remoteEntry.js",
          exposes: {
            "./Button": "./src/components/Button", // expose component
          },
          shared: {
            react: { singleton: true },
            "react-dom": { singleton: true },
          },
        })
      );
      return config;
    },
  },
};
