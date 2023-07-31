const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    uniqueName: "ngMfWeather",
    publicPath: "auto",
  },
  optimization: {
    runtimeChunk: false,
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: "module" },
      name: "ngMfWeather",
      filename: "remoteEntry.js",
      exposes: {
        "./WeatherWidgetModule": "./src/app/weather-widget/weather-widget.module.ts",
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: false, requiredVersion: "auto" },
        "@angular/common": { singleton: true, strictVersion: false, requiredVersion: "auto" },
        "@angular/common/http": { singleton: true, strictVersion: false, requiredVersion: "auto" },
        "@angular/router": { singleton: true, strictVersion: false, requiredVersion: "auto" },
        "@ng-mf/shared": { singleton: true, strictVersion: false, requiredVersion: "auto" },
      },
    }),
  ],
};
