<script setup lang="ts">
import { useCategories } from '@/entities/categories';
import { storeToRefs } from 'pinia';

const categoryStore = useCategories();
const { categories } = storeToRefs(categoryStore);
</script>

<template>
  <div class="menu page">
    <div v-for="category in categories" :key="category.id">
      <RouterLink
        :to="{name: 'category', params:{ categoryID: category.id } }"
      >{{ category.name }}</RouterLink>
    </div>
  </div>
</template>

<style src="./page.scss"></style>
