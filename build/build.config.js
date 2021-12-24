/**
 * build.config.js
 *
 * @author fukui
 */
module.exports = {
  vite: false,
  // remoteRuntime: true,
  polyfill: false,
  // 屏蔽store的注入
  store: false,
  //
  auth: false,
  plugins: [
    (api) => {
      api.modifyUserConfig('externals', {
        react: 'React',
        'react-dom': 'ReactDOM',
        'react-is': 'ReactIs',
      });
    },
    [
      'build-plugin-icestark',
      {
        type: 'child',
        umd: true,
      },
    ],
    [
      'build-plugin-ignore-style',
      {
        libraryName: 'antd',
      },
    ],
    [
      'build-plugin-moment-locales',
      {
        locales: ['zh-cn'],
      },
    ],
  ],
  alias: [],
  router: {
    lazy: false,
  },
  outputDir: 'dist',
  modeConfig: {
    prod: {},
    test: {},
  },
  postcssrc: true,
  vendor: true,
  hash: false,
  publicPath: './',
  sourceMap: false,
  webpackLoaders: {},
  lessLoaderOptions: {},
  babelPlugins: [],
  eslint: {
    fix: true,
  },
};
