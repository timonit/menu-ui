<script setup lang="ts">
import { FormApp, FormControl, ButtonApp, PositionAPI } from '@/shared';
import { formErrorHandler } from '@/shared/ui/form/utils';
import { ref } from 'vue';

const props = withDefaults(
  defineProps<{ingredients?: string[]; id: string;}>(),
  { ingredients: () => [] }
);

const emit = defineEmits<{(e: 'executed', val: string[]): void}>();

const form = ref({ingredients: props.ingredients.join(', ')});
const error = ref();

const submitHandler = formErrorHandler(error, async (event: Event) => {
  event.preventDefault();

  const api = new PositionAPI();
  const ingredients = form.value.ingredients.trim() ? form.value.ingredients.split(',') : [];
  const result = await api.setIngredients(props.id, ingredients);

  emit('executed', result);
})
</script>

<template>
  <FormApp :error="error" class="feature-form-horizontal" @submit="submitHandler">
    <FormControl v-model="form.ingredients" placeholder="Введите ингредиенты через запятую (лук, морковь, кортошка и т. д.)" />
    <ButtonApp label="Сохранить" type="submit" />
  </FormApp>
</template>
