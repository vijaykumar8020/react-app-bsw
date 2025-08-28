const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: {
    configure: (config) => {
      config.output.publicPath = "https://react-app-bsw.vercel.app/remoteEntry.js"; // apne remote ka URL

      config.plugins.push(
        new ModuleFederationPlugin({
          name: "remoteApp",
          filename: "remoteEntry.js",
          exposes: {
            "./Button": "./src/components/Button",
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
