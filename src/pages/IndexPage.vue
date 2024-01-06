<template>
  <HeroLayoyt></HeroLayoyt>
  <div class="container q-px-lg q-my-md">
    <!-- provide best customer experiences-->
    <section class="experience">
      <div class="q-pa-md row  justify-center  items-start q-gutter-md">
        <q-card class="my-card" flat bordered>
          <q-card-section class="text-center">
            <q-icon name="paid" style="font-size:2rem;" />
            <div class="text-h6 q-mt-sm q-mb-xs text-uppercase">Money </div>
            <div class="text-caption text-grey">
              Shall open divide a one
            </div>
          </q-card-section>
        </q-card>
        <q-card class="my-card" flat bordered>
          <q-card-section class="text-center">
            <q-icon name="local_shipping" style="font-size:2rem;" />
            <div class="text-h6 q-mt-sm q-mb-xs text-uppercase">Free Delivery</div>
            <div class="text-caption text-grey">
              Shall open divide a one
            </div>
          </q-card-section>
        </q-card>
        <q-card class="my-card" flat bordered>
          <q-card-section class="text-center">
            <q-icon name="support_agent" style="font-size:2rem;" />
            <div class="text-h6 q-mt-sm q-mb-xs text-uppercase">Alway support</div>
            <div class="text-caption text-grey">
              Shall open divide a one.
            </div>
          </q-card-section>
        </q-card>
        <q-card class="my-card" flat bordered>
          <q-card-section class="text-center">
            <q-icon name="currency_bitcoin" style="font-size:2rem;" />
            <div class="text-h6 q-mt-sm q-mb-xs text-uppercase">Secure payment</div>
            <div class="text-caption text-grey">
              Shall open divide a one.
            </div>
          </q-card-section>
        </q-card>
      </div>
    </section>

    <!-- startsection category in web(kids,mens,...)-->
    <section class="category">
      <div class="q-pa-md row items-start justify-center text-weight-bold text-h5 text-uppercase">
        Category
      </div>
      <div class="row items-start justify-center ">
        <q-separator inset style="width: 200px;" />
      </div>
      <div class="q-pa-md  row items-start justify-center text-caption text-grey">
        Bring called seed first of third give itself now ment
      </div>
      <div class="q-pa-md row items-start justify-center q-gutter-md">
        <q-card v-for="(category, key) in categoryInfo " :key="key" class="my-card hoverable-5">
          <q-img :src="category.image" class="my-img">
            <q-icon class="absolute-center all-pointer-events hover-icon" size="32px" name="visibility" color="white" />
            <div class="absolute-bottom">
              <div class="text-h6">{{ category.name }}</div>
            </div>
          </q-img>
        </q-card>
      </div>
    </section>
    <!--end section category-->

    <!-- start section new products-->
    <section class="product">
      <product-card></product-card>
    </section>
    <!--end section new products-->

    <!-- start section show all brands in webs -->
    <section class="brands">
      <div class="q-pa-md row items-start justify-center text-weight-bold text-h5 text-uppercase">
        Brands
      </div>
      <div class="row items-start justify-center ">
        <q-separator inset style="width: 200px;" />
      </div>
      <div class="q-pa-md  row items-start justify-center text-caption text-grey">
        Bring called seed first of third give itself now ment
      </div>
      <div class="q-pa-md row items-start  justify-center  q-gutter-lg text-weight-bold text-h5">
        <q-img v-for="(brand, key) in brandInfo" :key="key" :src="brand.image" class="img-brand" />
      </div>
    </section>
    <!--end section brands   -->
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
// import store
import { useCategoryStore } from 'src/stores/category'
import { useBrandStore } from 'src/stores/brand'
//import component
import ProductCard from 'src/components/ProductCard.vue'
import HeroLayoyt from "src/layouts/HeroLayoyt.vue";

// get data category 
const categoryStore = useCategoryStore()
const { categoryInfo } = storeToRefs(categoryStore)

//get data brand
const brandStore = useBrandStore()
const { brandInfo } = storeToRefs(brandStore)

</script>

<style scoped>
.hover-icon {
  opacity: 0;
}

.my-card:hover .hover-icon {
  opacity: 1;
}

.my-card {
  width: 270px;
}

.my-img {
  width: 270px;
  height: 270px;
}

.my-card:hover {
  margin-top: 10px;
  opacity: 0.5;
}

.img-brand {
  width: 90px;
  height: 60px;
}
</style>
