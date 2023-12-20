<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCategories } from '@/entities/categories';
import CategoryListItem from './category-list__item.vue';

const categoryStore = useCategories();
const { categories } = storeToRefs(categoryStore);
</script>

<template>
  <div class="category-list flex">
    <CategoryListItem
      v-for="category in categories"
      :key="category.id"
      :category="category"
    />
  </div>
</template>

<style scoped lang="scss">
.category-list {
  flex-direction: column;
  margin: 5em 0;
}
</style>
