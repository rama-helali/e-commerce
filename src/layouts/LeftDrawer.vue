<template>
  <q-drawer
    v-model="drawerToggler"
    :elevated="true"
    width="200"
    side="left"
    class="q-hide-md-up"
  >
    <q-list>
      <q-item-label
        header
        :class="
          $q.dark.isActive
            ? 'text-weight-bold text-h5 text-white'
            : 'text-weight-bold text-h5 text-dark'
        "
      >
        <q-icon
          size="1.3rem"
          :color="$q.dark.isActive ? 'white' : 'black'"
          name="close"
          style="min-width: 25px"
          class="q-mr-none"
          @click="drawerToggler = false"
        ></q-icon>
        <span> e-commerce </span>
      </q-item-label>

      <q-item clickable class="flex items-center">
        <q-item-section class="q-pr-none" style="min-width: 35px" avatar>
          <q-icon
            size=".65rem"
            name="fiber_manual_record"
            style="min-width: 25px"
            class="q-mr-none"
          ></q-icon>
        </q-item-section>
        <q-item-section>home</q-item-section>
      </q-item>
      <q-item clickable class="flex items-center">
        <q-item-section class="q-pr-none" style="min-width: 35px" avatar>
          <q-icon
            size=".65rem"
            name="fiber_manual_record"
            style="min-width: 25px"
            class="q-mr-none"
          ></q-icon>
        </q-item-section>
        <q-item-section>home </q-item-section> </q-item
      ><q-item clickable class="flex items-center">
        <q-item-section class="q-pr-none" style="min-width: 35px" avatar>
          <q-icon
            size=".65rem"
            name="fiber_manual_record"
            style="min-width: 25px"
            class="q-mr-none"
          ></q-icon>
        </q-item-section>
        <q-item-section>home </q-item-section> </q-item
      ><q-item clickable class="flex items-center">
        <q-item-section class="q-pr-none" style="min-width: 35px" avatar>
          <q-icon
            size=".65rem"
            name="fiber_manual_record"
            style="min-width: 25px"
            class="q-mr-none"
          ></q-icon>
        </q-item-section>
        <q-item-section>home </q-item-section>
      </q-item>
      <q-item clickable class="flex items-center">
        <q-item-section class="q-pr-none" style="min-width: 35px" avatar>
          <q-icon
            size="1.3rem"
            name="wb_sunny"
            style="min-width: 25px"
            class="q-mr-none"
          ></q-icon>
        </q-item-section>
        <q-item-section>dark </q-item-section>
      </q-item>
      <q-item clickable class="flex items-center" @click="openCart()">
        <q-item-section class="q-pr-none" style="min-width: 35px" avatar>
          <q-icon
            size="1.3rem"
            name="shopping_cart"
            style="min-width: 25px"
            class="q-mr-none"
          ></q-icon>
        </q-item-section>
        <q-item-section>cart </q-item-section>
      </q-item>
      <q-item clickable class="flex items-center">
        <q-item-section class="q-pr-none" style="min-width: 35px" avatar>
          <q-icon
            size="1.3rem"
            name="perm_identity"
            style="min-width: 25px"
            class="q-mr-none"
          ></q-icon>
        </q-item-section>
        <q-item-section>login </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script setup >
import { useLayoutStore } from "src/stores/layout";
import { useCartStore } from "src/stores/cart";
import { storeToRefs } from "pinia";

const layoutStore = useLayoutStore();
const { drawerToggler } = storeToRefs(layoutStore);

const cartStore = useCartStore();
const { cartToggler } = storeToRefs(cartStore);

const openCart = () => {
  drawerToggler.value = false;
  cartToggler.value = true;
};
</script>
