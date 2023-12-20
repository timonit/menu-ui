import { CategoryAPI, type CategoryDTO } from '@/shared';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCategories = defineStore('categories', {
  state: () => {
    const categories = ref<CategoryDTO[]>([]);

    const api = new CategoryAPI();
    api.getAll().then((res) => {categories.value = res});

    return {
      categories: categories,
    }
  },
})
