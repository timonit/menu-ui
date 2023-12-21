<script setup lang="ts">
import type { CategoryDTO } from '@/shared';

const props = defineProps<{ category: CategoryDTO; }>();
</script>

<template>
  <RouterLink
    :to="{
      name: 'category',
      params: { categoryID: props.category.id }
    }"
    class="category-list__item flex"
  >
    <h3 class="text-bold text-center category-list__item-title">
      {{ category.name }}
    </h3>

    <p class="text-center category-list__item-description">
      {{ category.description }}
    </p>
  </RouterLink>
</template>

<style scoped lang="scss">
.category-list__item {
  padding: 2rem;
  cursor: pointer;
  justify-content: space-between;
  text-decoration: none;
  border-bottom: solid 2px var(--background-color);
  align-items: start;
  gap: 2em;

  &:hover {
    box-shadow: 0 0 10px rgba($color: #000000, $alpha: .8);
    background: var(--background-color);
    
    .category-list__item-title, .category-list__item-description {
      color: var(--text-color);
    }
  }

  .category-list__item-title {
    margin: 0;
    padding: 0;
    font-size: 2rem;
    color: var(--background-color);
    width: 40%;
    text-align: start;
  }
  
  .category-list__item-description {
    font-weight: 400;
    margin: .5em 0;
    color: var(--background-color);
    width: 60%;
    text-align: end;
  }
}
</style>
