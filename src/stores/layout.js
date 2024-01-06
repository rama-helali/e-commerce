import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useLayoutStore = defineStore('layout', () => {
    const drawerToggler = ref(false);

    return {
        drawerToggler
    };
});
