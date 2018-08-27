module.exports = {
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        data: `
        @import "@/assets/scss/utils/_variables.scss";
        @import "@/assets/scss/utils/_mixins.scss";
      `
      }
    }
  },

  lintOnSave: true,

  pwa: {
    name: 'Designia',
    themeColor: '#0099ff',
    msTileColor: '#ffffff'
  }
}
