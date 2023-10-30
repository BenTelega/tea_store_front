<template>
  <div>
    <!-- <section class="layout-pt-sm layout-pb-lg bg-yellow-4"></section> -->
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
                    <small>{{ categoryCount }}</small>
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
                    <small>{{ categoryCount }}</small>
                  </div>
                </b-list-group-item>
              </b-list-group>
            </div>

            <!-- <b-form-group label="PRODUCT CATEGORIES">
              <b-form-radio
                :value="null"
                name="category"
                v-model="selectedCategory"
              >
                Все категории
              </b-form-radio>

              <b-form-radio
                v-for="category in categories"
                :key="category.id"
                :value="category.id"
                name="category"
                v-model="selectedCategory"
              >
                {{ category.name }}
              </b-form-radio>
            </b-form-group> -->
            <!-- Добавьте здесь содержимое вашей боковой колонки -->
          </aside>
        </b-col>

        <!-- Основная колонка -->
        <b-col md="9">
          <Card variant="primary">{{ selectedCategoryName }}</Card>

          <div class="row y-gap-30" v-if="!isLoading">
            <b-card>
              <b-skeleton animation="wave" width="85%"></b-skeleton>
              <b-skeleton animation="wave" width="55%"></b-skeleton>
              <b-skeleton animation="wave" width="70%"></b-skeleton>
            </b-card>
            <b-col> </b-col>
          </div>
          <b-row v-else>
            <b-col lg="3" md="4" class="mb-4" v-for="item in 26">
              <div class="product-grid2 shadow-sm">
                <div class="product-image2">
                  <a href="#">
                    <img class="pic-1" src="/pic/Girl-Scout-Cookies.jpg" />
                    <img class="pic-2" src="/pic/Girl-Scout-Cookies.jpg" />
                  </a>

                  <a class="add-to-cart" href="">View</a>
                </div>
                <div class="product-content">
                  <b-badge href="#" variant="info">Категория</b-badge>
                  <h3 class="title"><a href="#">Girl Scout Cookies</a></h3>
                  <span class="price">$145.00</span>
                </div>
              </div>
            </b-col>
          </b-row>

          <!-- Добавьте здесь содержимое вашей основной колонки -->
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'StorePage',
  layout: 'default',

  head() {
    return {
      title: 'Store',
    }
  },

  data() {
    return {
      selectedCategory: null, // Сюда будет добавлена выбранная категория
    }
  },
  async mounted() {
    await this.$store.dispatch('categories/fetchCategories')
    await this.$store.dispatch('items/fetchItems')
    // this.$bvToast.show('my-toast')
    // this.$notifier.showMessage({
    //   content: 'Какой-то контент',
    //   variant: 'primary',
    // })
  },
  computed: {
    categories() {
      return this.$store.getters['categories/getCategories']
    },
    products() {
      return this.$store.getters['items/getItems']
    },
    selectedCategoryName() {
      // Найдем название выбранной категории на основе selectedCategory
      const selectedCategory = this.categories.find(
        (category) => category.id === this.selectedCategory
      )
      return selectedCategory ? selectedCategory.name : 'Все категории'
    },
    isLoading() {
      return this.$store.getters['items/getLoading']
    },
  },

  methods: {
    selectCategory(categoryId) {
      this.selectedCategory = categoryId
      // Вы можете выполнить здесь запрос к товарам с выбранной категорией
    },
  },

  watch: {
    selectedCategory: function (value) {
      this.$store.dispatch('items/fetchItems', value)
    },
  },
}
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
