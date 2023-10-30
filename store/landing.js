// LANDING STORE

export const state = () => ({
  categories: [],
  title: '',
  body: '',
})

export const mutations = {
  setCategories(state, categories) {
    state.categories = categories
  },
  setTitle(state, title) {
    state.title = title
  },
}

export const getters = {
  getCategories(state) {
    return state.categories
  },
  getTitle(state) {
    return state.title
  },
}

export const actions = {
  async fetchTitle({ commit }, locale = null) {
    try {
      // Выполните GET-запрос с использованием Axios
      const response = await this.$axios.get(`/cms/landing/${locale}`)

      // Если запрос успешный, обновите состояние с полученными данными
      commit('setTitle', response.data)

      // Верните данные для обработки в компоненте, если это необходимо
      return response.data
    } catch (error) {
      // Обработайте ошибку, если запрос не удался
      console.error('Ошибка при получении заголовка:', error)
      throw error // Прокиньте ошибку для обработки в компоненте
    }
  },

  async fetchItems({ commit }, category = null) {
    try {
      // Создайте объект с параметрами запроса
      const params = {}
      if (category) {
        params.category = category
      }

      // Выполните GET-запрос с использованием Axios и параметрами запроса
      const response = await this.$axios.get(`/v1/items`, { params })

      // Если запрос успешен, обновите состояние с полученными данными
      commit('setItems', response.data)

      // Верните данные для обработки в компоненте, если это необходимо
      return response.data
    } catch (error) {
      // Обработайте ошибку, если запрос не удался
      console.error('Ошибка при получении товаров:', error)
      throw error // Прокиньте ошибку для обработки в компоненте
    }
  },
}