module.exports = (api) => {
  api.cache(true);

  const presets = [['@babel/preset-env', { targets: 'defaults' }]];
  const plugins = [];

  return {
    presets,
    plugins,
    env: {
      test: {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: { node: 'current' },
            },
          ],
        ],
        plugins: ['@babel/plugin-transform-runtime'],
      },
    },
  };
};
