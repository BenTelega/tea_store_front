// ITEMS STORE

export const state = () => ({
	items: [],
	categories: [],
	isLoading: false,
});

export const mutations = {
	startLoading(state) {
		state.isLoading = true;
	},
	stopLoading(state) {
		state.isLoading = false;
	},

	setItems(state, products) {
		state.items = products;
	},
	setCategories(state, categories) {
		state.categories = categories;
	},
};

export const getters = {
	getLoading(state) {
		return state.isLoading;
	},
	categories(state) {
		return state.categories;
	},
	products(state) {
		return state.items;
	},
};

export const actions = {
	async fetchItems({ commit }, category = null) {
		commit('startLoading');
		try {
			// Создайте объект с параметрами запроса
			const params = {};
			if (category) {
				params.category = category;
			}

			// Выполните GET-запрос с использованием Axios и параметрами запроса
			const response = await this.$axios.get(`/v1/items`, { params });

			// Если запрос успешен, обновите состояние с полученными данными
			commit('setItems', response.data);

			// Верните данные для обработки в компоненте, если это необходимо
			commit('stopLoading');
			return response.data;
		} catch (error) {
			commit('stopLoading');
			// Обработайте ошибку, если запрос не удался
			console.error('Ошибка при получении товаров:', error);
			throw error; // Прокиньте ошибку для обработки в компоненте
		}
	},
	async fetchCategories({ commit }) {
		try {
			// Выполните GET-запрос с использованием Axios
			const response = await this.$axios.get(`/v1/categories`);

			// Если запрос успешный, обновите состояние с полученными данными
			commit('setCategories', response.data);

			// Верните данные для обработки в компоненте, если это необходимо
			return response.data;
		} catch (error) {
			// Обработайте ошибку, если запрос не удался
			console.error('Ошибка при получении категорий:', error);
			throw error; // Прокиньте ошибку для обработки в компоненте
		}
	},
};
