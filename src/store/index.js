import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: []
  },
  mutations: {
    getCharacters(state,characters){
      state.characters = characters
    }
  },
  actions: {
    getCharactersAction({commit}){
      axios('https://hp-api.onrender.com/api/characters').then(res => {
        commit('getCharacters',res.data)
      })
    }
  },
  modules: {
  }
})
