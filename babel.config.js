module.exports = api => {
  api.cache(true);

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            app: './src/app',
            entities: './src/entities',
            pages: './src/pages',
            shared: './src/shared',
          },
        },
      ],
    ],
  };
};
