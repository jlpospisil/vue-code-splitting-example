const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js',
        scss: path.join(__dirname, 'src/scss'),
      },
    },
  },
};
