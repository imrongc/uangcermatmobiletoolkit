const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const includePath = path.resolve(__dirname, '../src');

module.exports = {
  stories: ["../src/components/**/*.stories.?(ts|tsx|js|jsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-react-native-web",
    "@storybook/addon-styling"
  ],
  framework: "@storybook/react",
  core: {
    builder: 'webpack5',
  },
  typescript: {
    reactDocgen: 'none',
  },
  webpackFinal: (config) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()];
    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, '../src/assets/fonts'),
            to: 'static/fonts'
          }
        ]
      })
    );

    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test(".svg")
    );
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push(
      {
        test: /\.svg$/,
        enforce: "pre",
        loader: require.resolve("@svgr/webpack")
      },
      {
        test: /\.module\.css$/,
        exclude: /\.module\.css$/,
        use: ['style-loader', 'css-loader'],
        include: includePath
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'url-loader',
        include: includePath
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader',
        include: includePath
      }
    );

    return config;
  }
};
