import { createStore } from 'vuex'

export default createStore({

  state: {
    defaultleague: [],
    league: [],
    fixtures: [],
  },

  mutations: {
    setLeague(state, league) {
      state.league = league
      state.defaultleague = league
    },
    setFixtures(state, fixtures) {
      state.fixtures = fixtures
    }
  },

  actions: {
    setLeague({ commit }, league) {
      commit('setLeague', league)
    },
    setFixtures({ commit }, fixtures) {
      commit('setFixtures', fixtures)
    }
  },

  modules: {

  }
})
