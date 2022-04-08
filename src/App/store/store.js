import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
      user: {},
      
    }
  },
  getters: {
    user(state) {
      return state.user
    }
  },
  mutations: {
    getUserInfo(state, userInfo) {
      state.user = userInfo
    }
  },
  actions: {
    async getUserInfo({commit}, user) {
      try {
        const response = await fetch(`https://looch.io/enrich?linkedin_url=linkedin.com/in/${user}`)
        const userInfo = await response.json()
        commit('getUserInfo', userInfo.payload)
      } catch(e) {
        console.log('Не удалось загрузить информацию о пользователе')
      }
    }
  }
})