<script setup lang="ts">
import { FormApp, FormControl, ButtonApp, PositionAPI } from '@/shared';
import { formErrorHandler } from '@/shared/ui/form/utils';
import { ref } from 'vue';

const props = withDefaults(
  defineProps<{ price?: number; id: string; }>(),
  { price: 0 }
);

const emit = defineEmits<{ (e: 'executed', val: number): void; }>();

const form = ref({ price: props.price });
const error = ref();

const submitHandler = formErrorHandler(error, async (event: Event) => {
  event.preventDefault();

  const api = new PositionAPI();
  const result = await api.changePrice(props.id, Number(form.value.price));

  emit('executed', result);
});
</script>

<template>
  <FormApp :error="error" class="feature-form-horizontal" @submit="submitHandler">
    <FormControl v-model="form.price" placeholder="Введите цену" type="number" />
    <ButtonApp label="Сохранить" type="submit" />
  </FormApp>
</template>
