/**
 * CRACO configuration file for customizing Webpack in a Create React App project.
 * This configuration enables Module Federation, allowing the app to expose and share components
 * with other remote or host applications.
 */

const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: {
    configure: (config) => {
      // Set the public path to "auto" for dynamic loading of remote modules
      config.output.publicPath = "auto";

      // Add the Module Federation Plugin to the Webpack configuration
      config.plugins.push(
        new ModuleFederationPlugin({
          /**
           * Name of the remote application. This name is used to identify the app in the federation.
           */
          name: "remoteApp",

          /**
           * The name of the file that will act as the entry point for the remote application.
           * This file contains metadata about the exposed modules.
           */
          filename: "remoteEntry.js",

          /**
           * Modules (components) that are exposed by this remote application.
           * These modules can be consumed by other host applications.
           */
          exposes: {
            "./Button": "./src/components/Button", // Exposes the Button component
            "./Card": "./src/components/Card", // Exposes the Card component
            "./HeroBanner": "./src/components/HeroBanner", // Exposes the HeroBanner component
          },

          /**
           * Shared dependencies between the remote and host applications.
           * These dependencies are loaded only once to avoid duplication.
           */
          shared: {
            /**
             * React is shared as a singleton to ensure only one instance of React is used
             * across the remote and host applications. This is critical for React's context
             * and hooks to work properly.
             */
            react: { 
              singleton: true, // Ensures only one instance of React is shared
              requiredVersion: false, // Disables strict version matching for flexibility
              eager: true, // Loads React upfront to avoid delays
            },

            /**
             * ReactDOM is also shared as a singleton for similar reasons as React.
             */
            "react-dom": {
              singleton: true, // Ensures only one instance of ReactDOM is shared
              requiredVersion: false, // Disables strict version matching for flexibility
              eager: true, // Loads ReactDOM upfront to avoid delays
            },
          },
        })
      );

      return config;
    },
  },
};