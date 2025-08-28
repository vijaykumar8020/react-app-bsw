const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: {
    configure: (config) => {
      config.output.publicPath = "http://localhost:3001/"; // 👈 remote CRA app ka URL
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
