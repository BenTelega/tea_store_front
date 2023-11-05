<template>
    <b-col lg="3" md="4" class="mb-4">
        <div class="product-grid2 shadow-sm">
            <div class="product-image2">
                <a href="#">
                    <img class="pic-1" :src="`https://shoppify-test.ru/${product_data.cover}`" />
                    <img class="pic-2" :src="`https://shoppify-test.ru/${product_data.cover}`" />
                </a>

                <a href="#" class="add-to-cart" @click.prevent="showProductModal(product_data)">View</a>
            </div>
            <div class="product-content">
                <b-badge href="#" variant="info">{{
                    product_data.category
                }}</b-badge>
                <h3 class="title">
                    <a href="#">{{ product_data.name }}</a>
                </h3>
                <span class="price">${{ product_data.price }}</span>
                <a href="#" @click.prevent="addToCart">add to cart</a>
            </div>
        </div>
    </b-col>
</template>

<script>
export default {
    props: {
        product_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        showProductModal(product) {
            this.$emit('showProductModal', product)
        },
        addToCart() {
            this.$emit('addToCart', this.product_data)
        }
    }
}

</script>