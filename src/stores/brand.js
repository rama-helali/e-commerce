import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useBrandStore = defineStore('brand', () => {
    //store data brand 
    const brandInfo = ref([{ image: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/09/CHANEL_THUMB_34302915-446e-4eb6-8eb1-ab1634e38378_1080x.jpg?auto=format&q=60&fit=max&w=930" },
    { image: "https://www.marketingmind.in/wp-content/uploads/2020/02/5.jpg?auto=format&q=60&fit=max&w=930" },
    { image: "https://www.marketingmind.in/wp-content/uploads/2020/02/1.png" },
    { image: "https://cdn.designcrowd.com/blog/2016/January/top-company-logos-black/4_Nike_400.png" }, { image: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/09/CHANEL_THUMB_34302915-446e-4eb6-8eb1-ab1634e38378_1080x.jpg?auto=format&q=60&fit=max&w=930" },
    { image: "https://www.marketingmind.in/wp-content/uploads/2020/02/5.jpg?auto=format&q=60&fit=max&w=930" },
    { image: "https://www.marketingmind.in/wp-content/uploads/2020/02/1.png" },
    { image: "https://cdn.designcrowd.com/blog/2016/January/top-company-logos-black/4_Nike_400.png" }])

    return {
        brandInfo
    }
});
