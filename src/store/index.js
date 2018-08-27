import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    progress: 0,
    currentWaves: {
      waveFirst: 'm0 0c54.686 36.646 327.26 335.16 903 102.21 575.74-232.96 712.1 104.6 1015.2-19.015v294.76h-1918.1z',
      waveSecond: 'm0 170.36s263.04-175.8 749.81 0c486.76 175.8 640.96-347.85 1167-104.74 3.013 5.6165 0 312.33 0 312.33h-1916.8z'
    },
    prevWaves: {
      waveFirst: 'm0 0c54.686 36.646 327.26 335.16 903 102.21 575.74-232.96 712.1 104.6 1015.2-19.015v294.76h-1918.1z',
      waveSecond: 'm0 170.36s263.04-175.8 749.81 0c486.76 175.8 640.96-347.85 1167-104.74 3.013 5.6165 0 312.33 0 312.33h-1916.8z'
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
