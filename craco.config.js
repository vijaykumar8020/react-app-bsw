const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: {
    configure: (config) => {
      config.output.publicPath = "auto"; // apne remote ka URL

      config.plugins.push(
        new ModuleFederationPlugin({
          name: "remoteApp",
          filename: "remoteEntry.js",
          exposes: {
            "./Button": "./src/components/Button",
            "./Card": "./src/components/Card",
          },
          shared: {
            react: { singleton: true, requiredVersion: false, eager: true },
            "react-dom": { singleton: true, requiredVersion: false, eager: true },
          },
        })
      );

      return config;
    },
  },
};
