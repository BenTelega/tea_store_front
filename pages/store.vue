<template>
  <div>
    <!-- <section class="layout-pt-sm layout-pb-lg bg-yellow-4"></section> -->
    <b-container>
      <b-row>
        <!-- Боковая колонка -->
        <b-col xl="3" lg="4">
          <aside class="sidebar mt-2 shadow-sm">
            <b-form-group label="Выберите категорию:">
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
            </b-form-group>
            <!-- Добавьте здесь содержимое вашей боковой колонки -->
          </aside>
        </b-col>

        <!-- Основная колонка -->
        <b-col md="9">
          <b-badge href="#" variant="primary">{{
            selectedCategoryName
          }}</b-badge>

          <div class="row y-gap-30" v-if="isLoading">
            <b-col>
              <div class="text-center">
                <b-spinner variant="primary" label="Text Centered"></b-spinner>
              </div>
            </b-col>
          </div>
          <div class="row y-gap-30" v-else>
            <b-card-group columns>
              <b-card v-for="product in products" :key="product.id">
                <b-card-title>{{ product.name }}</b-card-title>
                <b-card-text>
                  {{ product.description }}
                </b-card-text>
                <b-card-text class="small text-muted">{{
                  product.price
                }}</b-card-text>
              </b-card>
            </b-card-group>
          </div>

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
  padding: 15px;
  /* border: 1px solid #ccc; */
  font-weight: bold;
}

/* Дополнительные стили можно добавить здесь */
</style>
