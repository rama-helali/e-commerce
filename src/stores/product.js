import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProductStore = defineStore('product', () => {
    //store data new Product 
    const newProductInfo = ref([{ image: "https://preview.colorlib.com/theme/fashi/img/products/women-4.jpg", name: "LATEST MEN’S SNEAKER", price: 20, id: 1 },
    { image: "https://preview.colorlib.com/theme/fashi/img/products/man-2.jpg", name: "LATEST MEN’S SNEAKER", price: 20, id: 2 },
    { image: "https://preview.colorlib.com/theme/fashi/img/products/man-1.jpg", name: "LATEST MEN’S SNEAKER", price: 20, id: 3 },
    { image: "https://preview.colorlib.com/theme/fashi/img/products/man-4.jpg", name: "LATEST MEN’S SNEAKER", price: 20, priceSel: 10, id: 4 },
    { image: "https://preview.colorlib.com/theme/aroma/img/home/hero-slide1.png", name: "LATEST MEN’S SNEAKER", price: 20, priceSel: 0, id: 5 },
    { image: "https://preview.colorlib.com/theme/eiser/img/product/inspired-product/i1.jpg", name: "LATEST MEN’S SNEAKER", price: 20, priceSel: 10, id: 6 },
    { image: "https://preview.colorlib.com/theme/eiser/img/product/new-product/n1.jpg", name: "LATEST MEN’S SNEAKER", price: 20, id: 7 },
    { image: "https://preview.colorlib.com/theme/eiser/img/product/new-product/n2.jpg", name: "LATEST MEN’S SNEAKER", price: 20, id: 8 }])

    return {
        newProductInfo
    }
});
