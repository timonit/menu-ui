<script setup lang="ts">
import { FormApp, FormControl, CategoryAPI } from '@/shared';
import { ref } from 'vue';

const form = ref({
  name: '',
  description: '',
});

const addCategory = async () => {
  const api = new CategoryAPI();
  await api.create({
    ...form.value,
    positions: [],
  });
};
</script>

<template>
  <FormApp @submit="addCategory">
    <FormControl label="name" v-model="form.name" />
    <FormControl label="description" v-model="form.description" />
    <button type="submit">Add</button>
  </FormApp>
</template>
