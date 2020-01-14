module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugin: [
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: 'src',
      },
    ],
  ],
};
