const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: {
    configure: (config) => {
      config.output.publicPath = "http://localhost:3001/"; // apne remote ka URL

      config.plugins.push(
        new ModuleFederationPlugin({
          name: "remoteApp",
          filename: "remoteEntry.js",
          exposes: {
            "./Button": "./src/components/Button",
          },
          shared: {
            react: { singleton: true, requiredVersion: false, eager: false },
            "react-dom": { singleton: true, requiredVersion: false, eager: false },
          },
        })
      );

      return config;
    },
  },
};
