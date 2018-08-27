import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    progress: 0,
    currentWaves: {
      waveFirst: 'm0 0c14.469 15.71 86.588 143.68 238.92 43.818 152.33-99.867 188.41 44.84 268.6-8.1516v126.36h-507.51z',
      waveSecond: 'm0 73.033s69.597-75.362 198.39 0c128.79 75.365 169.59-149.12 308.78-44.899 0.79722 2.4077 0 133.89 0 133.89h-507.16z'
    },
    prevWaves: {
      waveFirst: '',
      waveSecond: ''
    }
  },
  mutations: {
    setProgress (state, data) {
      state.progress = data
    },

    setWaves (state, data) {
      state.prevWaves = state.currentWaves
      state.currentWaves = data
    }
  }
})
