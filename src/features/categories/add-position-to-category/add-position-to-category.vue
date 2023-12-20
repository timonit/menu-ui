<script setup lang="ts">
import { FormApp, FormControl, ButtonApp, CategoryAPI } from '@/shared';
import { ref } from 'vue';

const props = defineProps<{categoryID: string;}>();
const emit = defineEmits<{(e: 'executed', val: string[]): void}>();

const form = ref({
  name: '',
  price: 0,
  photo: '',
  ingredients: '',
});

const submitHandler = async (event: Event) => {
  event.preventDefault();

  const api = new CategoryAPI();
  const result = await api.addPosition(
    props.categoryID,
    {
      ...form.value,
      price: Number(form.value.price),
      ingredients: form.value.ingredients.split(',')
    }
  );

  emit('executed', result);
}
</script>

<template>
  <FormApp @submit="submitHandler">
    <FormControl v-model="form.name" label="name" />
    <FormControl v-model="form.price" label="price" type="number" />
    <FormControl v-model="form.ingredients" label="ingredients" />
    <FormControl v-model="form.photo" label="photo" />
    <ButtonApp label="Add" type="submit" />
  </FormApp>
</template>
