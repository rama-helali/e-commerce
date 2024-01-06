import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCategoryStore = defineStore('gategory', () => {
    //store data category 
    const categoryInfo = ref([{ image: "https://preview.colorlib.com/theme/fashi/img/banner-3.jpg", name: "Kids", id: 1 },
    { image: "https://preview.colorlib.com/theme/fashi/img/banner-2.jpg", name: "Womens", id: 2 },
    { image: "https://preview.colorlib.com/theme/fashi/img/banner-1.jpg", name: "Mens", id: 3 },
    { image: "https://media.istockphoto.com/id/693436828/photo/adorable-little-baby-boy-posing.jpg?s=612x612&w=0&k=20&c=49V5fSebfuGx8AZBsFOxQ45OK3LVVpLlzWMW99vlMqE=", name: "Baby", id: 4 }])

    return {
        categoryInfo
    }
});
