<template>
	<div>
		<b-modal v-model="modalShow" hide-footer size="lg">
			<template #modal-title
				>{{ selectedProduct['id'] }} {{ selectedProduct['name'] }}</template
			>
			<b-container fluid v-if="selectedProduct">
				<b-row>
					<b-col cols="4"
						><b-img
							:src="`https://shoppify-test.ru/${selectedProduct['cover']}`"
							fluid
							alt="placeholder"
						></b-img
					></b-col>
					<b-col cols="8">
						<h3>{{ selectedProduct['name'] }}</h3>
						<span v-html="selectedProduct['description']"></span>
						<h4 class="text-monospace">${{ selectedProduct['price'] }}</h4>
						<div class="mt-3">
							<b-form-spinbutton
								id="sb-inline"
								v-model="value"
								inline
							></b-form-spinbutton>
							<button class="btn btn-outline-success">ADD TO CART</button>
						</div>
					</b-col>
				</b-row>
			</b-container>
		</b-modal>
		<!-- <section class="layout-pt-sm layout-pb-lg bg-yellow-4"></section> -->
		<Cart v-if="CART.length" :cart_data="CART" />
		<b-container>
			<b-row>
				<!-- Боковая колонка -->
				<b-col xl="3" lg="3">
					<aside class="sidebar mt-2 shadow-sm">
						<div>
							<b-list-group>
								<b-list-group-item
									href="#"
									class="custom-item flex-column align-items-start"
									@click="selectCategory(null)"
								>
									<div class="d-flex w-100 justify-content-between">
										<p class="mb-1">ALL categories</p>
										<small></small>
									</div>
								</b-list-group-item>
								<b-list-group-item
									v-for="category in categories"
									:key="category.id"
									href="#"
									class="custom-item flex-column align-items-start"
									@click="selectCategory(category.id)"
								>
									<div class="d-flex w-100 justify-content-between">
										<p class="mb-1">{{ category.name }}</p>
										<small></small>
									</div>
								</b-list-group-item>
							</b-list-group>
						</div>
					</aside>
				</b-col>

				<!-- Основная колонка -->
				<b-col md="9">
					<b-card
						bg-variant="light"
						text-variant="dark"
						class="shadow-sm mt-2 mb-3"
						:title="selectedCategoryName"
					>
					</b-card>

					<div class="row y-gap-30" v-if="isLoading">
						<b-col lg="3" md="4" class="mb-4" v-for="(item, i) in 8" :key="i">
							<b-card>
								<b-skeleton animation="wave" width="85%"></b-skeleton>
								<b-skeleton animation="wave" width="55%"></b-skeleton>
								<b-skeleton animation="wave" width="70%"></b-skeleton>
							</b-card>
						</b-col>
					</div>
					<b-row v-else>
						<product-item
							v-for="product in products"
							:key="product.id"
							:product_data="product"
							@showProductModal="showProductModal"
							@addToCart="addToCart"
						/>
					</b-row>

					<!-- Добавьте здесь содержимое вашей основной колонки -->
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'StorePage',
	layout: 'default',
	head() {
		return {
			title: 'Store',
		};
	},

	data() {
		return {
			value: 1,
			showModal: false,
			modalShow: false,
			selectedProduct: null,
			selectedCategory: null, // Сюда будет добавлена выбранная категория
		};
	},
	async mounted() {
		await this.$store.dispatch('fetchSiteConfig', `${this.$i18n.locale}`);
		await this.$store.dispatch('categories/fetchCategories');
		await this.$store.dispatch('items/fetchItems');
		// this.$bvToast.show('my-toast')
		// this.$notifier.showMessage({
		//   content: 'Какой-то контент',
		//   variant: 'primary',
		// })
	},
	computed: {
		CART() {
			return this.$store.getters['cart/CART'];
		},
		categories() {
			return this.$store.getters['categories/getCategories'];
		},
		products() {
			return this.$store.getters['items/getItems'];
		},
		selectedCategoryName() {
			// Найдем название выбранной категории на основе selectedCategory
			const selectedCategory = this.categories.find(
				(category) => category.id === this.selectedCategory
			);
			return selectedCategory ? selectedCategory.name : 'Все категории';
		},
		isLoading() {
			return this.$store.getters['items/getLoading'];
		},
	},

	methods: {
		selectCategory(categoryId) {
			this.selectedCategory = categoryId;
			// Вы можете выполнить здесь запрос к товарам с выбранной категорией
		},
		showProductModal(product) {
			this.selectedProduct = product;
			this.modalShow = true;
		},
		addToCart(data) {
			console.log(data);
			this.$store.dispatch('cart/addToCart', data);
		},
	},

	watch: {
		selectedCategory: function (value) {
			this.$store.dispatch('items/fetchItems', value);
		},
	},
};
</script>

<style>
/* Стилизуйте боковую колонку и основную колонку по своему усмотрению */
.sidebar {
	min-height: 400px;
	background-color: #f0f0f0;
	/* padding: 15px; */
	/* border: 1px solid #ccc; */
	/* font-weight: bold; */
}

.custom-item {
	padding-left: 8px;
	padding-top: 5px;
	padding-bottom: 5px;
	border-bottom: 1px solid rgb(233, 229, 229);
	border-top: none;
	border-left: none;
	border-right: none;
}

/* Дополнительные стили можно добавить здесь */
</style>
