module.exports = (api) => {
  const isTest = api.env('test');

  const presets = [
    [
      '@babel/preset-env',
      {
        modules: isTest ? 'commonjs' : false, // transform ES modules to commonjs for Jest
        useBuiltIns: 'usage', // enables polyfills based on usage
        corejs: 3, // version of core-js to use
      },
    ],
    '@babel/preset-react',
  ];

  const plugins = [
    '@babel/plugin-proposal-class-properties', // for class properties
    '@babel/plugin-syntax-dynamic-import', // for dynamic import()
  ];

  return {
    presets,
    plugins,
  };
};
