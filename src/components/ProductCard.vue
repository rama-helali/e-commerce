<template>
    <div class="q-pa-md row items-start justify-center text-weight-bold text-h5 text-uppercase">
        new products
    </div>
    <div class="row items-start justify-center ">
        <q-separator inset style="width: 200px;" />
    </div>
    <div class="q-pa-md  row items-start justify-center text-caption text-grey">
        Bring called seed first of third give itself now ment
    </div>
    <div class="q-pa-md row items-start justify-center q-gutter-md">
        <q-card v-for="(product, key) in newProductInfo " :key="key" class="my-card hoverable-5">
            <q-img :src="product.image" class="my-img">
                <q-badge v-if="product?.priceSel" color="primary" text-color="white" position="top-right">
                    Sell
                </q-badge>
                <div class="absolute-bottom hover-bar">
                    <!-- section add to cart and show details -->
                    <div class="absolute-center ">
                        <q-btn flat round icon="favorite_border" size="13px" :color="color[0]"
                            @click="simulateProgress(0)" />
                        <q-btn flat round icon="shopping_cart" size="13px" :color="color[1]"
                            @click="simulateProgress(1, product)" />
                        <q-btn flat round icon="visibility" size="13px" :color="color[2]" @click="simulateProgress(2)" />

                    </div>
                    <!-- end section add to cart-->
                </div>
            </q-img>
            <!-- section price and price sell-->
            <q-card-section>
                <div class="text-h6 q-mb-xs text-weight-light">{{ product.name }}</div>
                <div class="row no-wrap text-h5 q-mb-xs">
                    <p class=" text-h5 q-mb-xs" v-if="product?.priceSel">{{ product.priceSel }}$</p>
                    <p class=" text-h5 q-mb-xs" v-if="!product?.priceSel">{{ product.price }}$</p>
                    <q-space></q-space>
                    <p v-if="product?.priceSel" class=" text-h6 q-mb-xs text-weight-light"
                        style=" text-decoration: line-through; color: #ccc;">
                        {{ product.price }}$
                    </p>
                </div>
            </q-card-section>
            <!-- end section price -->
        </q-card>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { ref } from 'vue'
//import store
import { useProductStore } from 'src/stores/product'
import { useCartStore } from "src/stores/cart";

const color = ref(['white', 'white', 'white'])
//get data new products 
const productStore = useProductStore()
const { newProductInfo } = storeToRefs(productStore)

const cartStore = useCartStore();

//add product to cart 
const addproduct = (productInfo) => {
    cartStore.addToCart(productInfo);
};
// change color button 
const simulateProgress = (number, productInfo) => {
    color.value[number] = 'positive'
    addproduct(productInfo)
    setTimeout(() => {
        // we're done, we reset loading state
        color.value[number] = 'white'
    }, 1000)
}
</script>

<style scoped>
.hover-bar {
    opacity: 0;
}

.my-card:hover .hover-bar {
    opacity: 1;
}

.my-card {
    width: 270px;
}

.my-img {
    width: 270px;
    height: 270px;
}

.img-brand {
    width: 90px;
    height: 60px;
}
</style>