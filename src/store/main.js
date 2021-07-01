import * as types from './mutation-types'

const state = () => {
  return {
    darkMode: false,
    proyect: null
  }
}

// getters
const getters = {
  darkMode: state => state.darkMode,
  proyect: state => state.proyect
}

// actions
const actions = {
  setDarkMode({ commit }, darkMode) {
    commit(types.SET_DARK_MODE, { darkMode })
  },
  setProyect({ commit }, proyect) {
    // console.log('seteando', proyect)
    commit('setProyect', proyect)
  }
}

// mutations
const mutations = {
  [types.SET_DARK_MODE](state, { darkMode }) {
    state.darkMode = darkMode
  },
  setProyect(state, proyect) {
    // console.log(proyect)
    state.proyect = proyect
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
