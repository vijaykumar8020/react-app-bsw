const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: {
    configure: (config) => {
      config.output.publicPath = "http://localhost:3000/"; // remote URL

      config.plugins.push(
        new ModuleFederationPlugin({
          name: "remoteApp",
          filename: "remoteEntry.js",
          exposes: {
            "./Button": "./src/components/Button",
          },
          shared: {
            react: { singleton: true, eager: true, requiredVersion: false },
            "react-dom": { singleton: true, eager: true, requiredVersion: false },
          },
        })
      );
      return config;
    },
  },
};
