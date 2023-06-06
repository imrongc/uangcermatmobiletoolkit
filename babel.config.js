module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'babel-plugin-styled-components-react-native-web',
    ['babel-plugin-react-docgen-typescript', {exclude: 'node_modules'}],
  ],
};
