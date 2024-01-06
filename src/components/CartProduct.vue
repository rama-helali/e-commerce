<template>
  <q-dialog v-model="cartToggler">
    <q-card style="width: 1000px; max-width: 1000px">
      <q-card-section>
        <div class="container">
          <div class="row column">
            <div class="text-h5 text-weight-medium q-mb-none q-pb-none">
              Shopping Cart
            </div>
            <div class="text-grey-5 text-subtitle1 text-weight-medium">
              Home-Shopping Cart
            </div>
          </div>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="q-pa-md">
          <q-table flat bordered title="cart" :rows="orders" :columns="columns" row-key="name" binary-state-sort>
            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td key="productImage" :props="props">
                  <q-img :src="props.row.productImage" class="my-img"></q-img>
                  <q-popup-edit v-model="props.row.name" v-slot="scope">
                    <q-input v-model="scope.value" dense autofocus counter @keyup.enter="scope.set" />
                  </q-popup-edit>
                </q-td>
                <q-td key="priceProduct" :props="props">
                  {{ props.row.priceProduct }}$
                </q-td>
                <q-td key="count" :props="props">

                  <div class="text-pre-wrap"> <q-btn flat round size="0.55rem" color="primary" icon="add" class="q-mx-sm"
                      @click="incrementCount(props.row.productInfo)" />{{
                        props.row.count }}<q-btn flat round color="primary" size="0.55rem" icon="remove" class="q-mx-sm"
                      @click="decrementCount(props.row.productInfo)" />
                  </div>

                </q-td>
                <q-td key="total" :props="props">
                  {{ props.row.total }}$
                </q-td>
              </q-tr>
            </template>
            <template v-slot:bottom>
              <div class=" text-h6 q-mr-md "> Subtotal</div>
              <div class=" text-h6 "> {{ order.totalPrice }}$</div>

            </template>
          </q-table>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
  
<script setup >
import { useCartStore } from "src/stores/cart";
import { storeToRefs } from "pinia";
import { ref } from 'vue'

const cartStore = useCartStore();
const { cartToggler, orders, order } = storeToRefs(cartStore);

const columns = ref([
  { name: 'productImage', label: 'Product Image', align: 'center' },
  { name: 'priceProduct', align: 'center', label: 'price' },
  { name: 'count', align: 'center', label: 'Count' },
  { name: 'total', label: 'Tota Price', align: 'center', },
])
// increment count product 
const incrementCount = (productInfo) => {
  cartStore.increaseCount(productInfo)
}
//decrement count product
const decrementCount = (productInfo) => {
  cartStore.dcreaseCount(productInfo)
}
</script>

<style scoped>
.my-img {
  width: 100px;
  height: 100px;
}
</style>
  