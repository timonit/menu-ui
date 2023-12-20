<script setup lang="ts">
import { FormApp, FormControl, ButtonApp, PositionAPI } from '@/shared';
import { ref } from 'vue';

const props = withDefaults(
  defineProps<{ingredients?: string[]; id: string;}>(),
  { ingredients: () => [] }
);

const emit = defineEmits<{(e: 'executed', val: string[]): void}>();

const form = ref({ingredients: props.ingredients.join(', ')});

const submitHandler = async (event: Event) => {
  event.preventDefault();

  const api = new PositionAPI();
  const result = await api.setIngredients(props.id, form.value.ingredients.split(','));

  emit('executed', result);
}
</script>

<template>
  <FormApp @submit="submitHandler">
    <FormControl v-model="form.ingredients" placeholder="ingredients" />
    <ButtonApp label="change" type="submit" />
  </FormApp>
</template>
