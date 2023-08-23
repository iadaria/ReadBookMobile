module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@src': './',
          '@components': './src/components',
          '@store': './src/store',
          '@utils': './src/utils',
          '@screens': './src/screens',
        },
      },
    ],
    '@babel/plugin-proposal-export-namespace-from',
    'react-native-reanimated/plugin',
  ],
};
