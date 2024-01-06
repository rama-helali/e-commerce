<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-light">
    <!-- start navbar -->
    <q-header class="bg-white text-dark">
      <q-toolbar class="row justify-between" :class="$q.dark.isActive ? 'text-white bg-dark' : 'bg-white text-dark'">
        <q-toolbar-title class="row items-center">
          <div>e-commerce</div>
        </q-toolbar-title>
        <q-space></q-space>
        <q-btn size="md" flat round dense icon="menu" v-if="$q.screen.width < 600" @click="drawerToggler = true" />
        <div class="items-center" v-if="$q.screen.width >= 600">
          <q-btn class="q-mr-xs" flat> home</q-btn>
          <q-btn class="q-mr-xs" flat> home</q-btn>
          <q-btn class="q-mr-xs" flat> home</q-btn>
          <q-btn class="q-mr-xs" flat> home</q-btn>
        </div>
        <q-space v-if="$q.screen.width >= 600"></q-space>
        <q-input v-if="$q.screen.width >= 600" color="white" bg-color="white" dense filled prepend-icon="search"
          placeholder="Search..." class="flex-grow-1 q-mx-lg">
          <template v-slot:prepend>
            <q-icon name="search" class="text-dark" />
          </template>
        </q-input>
        <div>
          <q-btn v-if="$q.screen.width >= 600" class="q-mr-xs" flat round @click="$q.dark.toggle()"
            :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'" />
          <q-btn v-if="$q.screen.width >= 600" icon="shopping_cart" round flat unelevated
            @click="cartToggler = !cartToggler">
            <q-badge color="red" floating transparent>
              {{ orderCount }}
            </q-badge></q-btn>
          <q-btn v-if="$q.screen.width >= 600" icon="person" flat unelevated round>
          </q-btn>
        </div>
      </q-toolbar>
      <left-drawer></left-drawer>
    </q-header>
    <!--end nave bar -->
    <!-- all page -->
    <q-page-container>
      <router-view />
    </q-page-container>
    <!-- footer -->
    <footer-layout></footer-layout>
    <!-- drawer cart-->
    <cart-product></cart-product>
  </q-layout>
</template>

<script setup>
//component
import FooterLayout from "./FooterLayout.vue";
import LeftDrawer from "./LeftDrawer.vue";
import CartProduct from "src/components/CartProduct.vue";
//store
import { useLayoutStore } from "src/stores/layout";
import { useCartStore } from "src/stores/cart";
import { storeToRefs } from "pinia";

const layoutStore = useLayoutStore();
const { drawerToggler } = storeToRefs(layoutStore);

const cartStore = useCartStore();
const { cartToggler, orderCount } = storeToRefs(cartStore);
</script>


