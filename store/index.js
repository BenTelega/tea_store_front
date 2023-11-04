export const state = () => ({
  config: '',
})

export const mutations = {
  setSiteConfig(state, data) {
    state.config = data
  },
}

export const getters = {
  getSiteConfig(state) {
    return state.config
  },
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    return state.auth.user
  },
}

export const actions = {
  async fetchSiteConfig({ commit }, locale = null) {
    try {
      // Выполните GET-запрос с использованием Axios
      const response = await this.$axios.get(`/cms/site/${locale}`)

      // Если запрос успешный, обновите состояние с полученными данными
      commit('setSiteConfig', response.data)

      // Верните данные для обработки в компоненте, если это необходимо
      return response.data
    } catch (error) {
      // Обработайте ошибку, если запрос не удался
      console.error('Ошибка при получении заголовка:', error)
      throw error // Прокиньте ошибку для обработки в компоненте
    }
  },
}
