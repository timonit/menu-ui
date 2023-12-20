<script setup lang="ts">
import { CategoryView } from '@/widgets';
import { useRoute } from 'vue-router';

const route = useRoute();
const categoryID = route.params.categoryID;
</script>

<template>
  <main>
    <CategoryView :categoryID="(categoryID as string)" />
  </main>
</template>
