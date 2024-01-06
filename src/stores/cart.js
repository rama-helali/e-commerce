import { ref } from 'vue';
import { defineStore } from 'pinia';
import { storeToRefs } from 'pinia';

export const useCartStore = defineStore('cart', () => {
    const cartToggler = ref(false)
    const orders = ref([])
    const order = ref({})
    const totalPrice = ref(0)
    const orderCount = ref(0)

    const addToCart = (productInfo) => {
        orders.value = [...orders?.value, {
            productInfo: productInfo, productImage: productInfo.image, count: 1, productId: productInfo.id, priceProduct: productInfo?.priceSel ? productInfo?.priceSel : productInfo?.price, total: productInfo?.priceSel ? productInfo?.priceSel : productInfo?.price
        }]
        console.log(orders.value)
        totalPrice.value = totalPrice.value + (productInfo?.priceSel ? productInfo?.priceSel : productInfo?.price)
        order.value = { totalPrice: totalPrice.value, tax: 10 }
        orderCount.value = orders.value.length
        console.log(orderCount.value)
    }

    const increaseCount = (productInfo) => {
        orders.value.map((el) => {
            if (el.productId == productInfo.id) {
                el.total = el.priceProduct * (el.count + 1)
                el.count = el.count + 1
            }
        })
        totalPrice.value = order.value.totalPrice + (productInfo?.priceSel ? productInfo?.priceSel : productInfo.price)
        order.value = { totalPrice: totalPrice.value, tax: 10 }
    }

    const dcreaseCount = (productInfo) => {
        const newOrder = ref([])
        let c = 0
        orders.value.map((el) => {
            // نقص كميت المنتج 
            if (el.productId == productInfo.id) {
                el.total = el.priceProduct * (el.count - 1)
                //حذف المنتج بحال الكمية متبقية معدومة 
                if ((el.count - 1) > 0) {
                    newOrder.value[c] = el
                    c++
                }
                el.count = el.count - 1
            }
            else {
                if ((el.count) > 0) {
                    newOrder.value[c] = el
                    c++
                }
            }
        })
        totalPrice.value = order.value.totalPrice - (productInfo?.priceSel ? productInfo?.priceSel : productInfo.price)
        order.value = { totalPrice: totalPrice.value, tax: 10 }
        orders.value = newOrder.value
        orderCount.value = newOrder.value.length
        console.log(orders.value, newOrder.value)
    }


    return {
        cartToggler,
        order,
        totalPrice,
        orders,
        orderCount,

        addToCart,
        increaseCount,
        dcreaseCount

    };
});