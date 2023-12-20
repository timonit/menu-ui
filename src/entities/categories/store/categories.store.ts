import { CategoryAPI, type CategoryDTO } from '@/shared';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCategories = defineStore('categories', {
  state: () => {
    const categories = ref<CategoryDTO[]>([]);

    const api = new CategoryAPI();
    api.getAll().then((res) => {categories.value = res});

    return {
      categories,
    }
  },
  actions: {
    async fetchCategories() {
      const api = new CategoryAPI();
      const result = await api.getAll();
      this.categories = result;
    },
    async addCategory(category: Omit<CategoryDTO, 'id'>) {
      const api = new CategoryAPI();
      await api.create(category);
      this.fetchCategories();
    },
    async removeCategory(categoryID: string) {
      const api = new CategoryAPI();
      await api.remove(categoryID);
      this.fetchCategories();
    }
  }
})
