// LANDING STORE

export const state = () => ({
	landing: {},
	testmonials: [],
});

export const mutations = {
	setLanding(state, data) {
		state.landing = data;
	},
	setTestmonials(state, testmonials) {
		state.testmonials = testmonials;
	},
};

export const getters = {
	landingBlur(state) {
		return state.landing.blur;
	},
	landingTitle(state) {
		return state.landing.title;
	},
	landingBody(state) {
		return state.landing.body;
	},
	landingButton(state) {
		return state.landing.button_text;
	},
	landingCover(state) {
		return 'https://shoppify-test.ru' + state.landing.cover;
	},
	testmonials(state) {
		return state.testmonials;
	},
};

export const actions = {
	async fetchLanding({ commit }, locale = null) {
		try {
			// Выполните GET-запрос с использованием Axios
			const response = await this.$axios.get(`/cms/landing/${locale}`);

			// Если запрос успешный, обновите состояние с полученными данными
			commit('setLanding', response.data);

			// Верните данные для обработки в компоненте, если это необходимо
			return response.data;
		} catch (error) {
			// Обработайте ошибку, если запрос не удался
			console.error('Ошибка при получении заголовка:', error);
			throw error; // Прокиньте ошибку для обработки в компоненте
		}
	},
	async fetchTestmonials({ commit }, locale = null) {
		try {
			// Выполните GET-запрос с использованием Axios
			const response = await this.$axios.get(`/v1/testmonials/${locale}`);

			// Если запрос успешный, обновите состояние с полученными данными
			commit('setTestmonials', response.data);

			// Верните данные для обработки в компоненте, если это необходимо
			return response.data;
		} catch (error) {
			// Обработайте ошибку, если запрос не удался
			console.error('Ошибка при получении заголовка:', error);
			throw error; // Прокиньте ошибку для обработки в компоненте
		}
	},
};
