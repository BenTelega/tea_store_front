// ITEMS STORE

export const state = () => ({
	items: [],
	isLoading: false,
});

export const mutations = {
	startLoading(state) {
		state.isLoading = true;
	},
	stopLoading(state) {
		state.isLoading = false;
	},

	setItems(state, items) {
		state.items = items;
	},
};

export const getters = {
	getLoading(state) {
		return state.isLoading;
	},
	getItems(state) {
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
};
