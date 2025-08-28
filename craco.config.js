const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: {
    configure: (config) => {
      config.output.publicPath = "https://react-app-bsw.vercel.app/"; 
      // 👆 yahi tumhare remote ka Vercel deploy URL hai

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
