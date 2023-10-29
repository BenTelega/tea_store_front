// CATEGORIES STORE

export const state = () => ({
  categories: [],
})

export const mutations = {
  setCategories(state, categories) {
    state.categories = categories
  },
}

export const getters = {
  getCategories(state) {
    return state.categories
  },
}

export const actions = {
  async fetchCategories({ commit }) {
    try {
      // Выполните GET-запрос с использованием Axios
      const response = await this.$axios.get(`/v1/categories`)

      // Если запрос успешный, обновите состояние с полученными данными
      commit('setCategories', response.data)

      // Верните данные для обработки в компоненте, если это необходимо
      return response.data
    } catch (error) {
      // Обработайте ошибку, если запрос не удался
      console.error('Ошибка при получении категорий:', error)
      throw error // Прокиньте ошибку для обработки в компоненте
    }
  },
}
