<script setup lang="ts">
import { FormApp, FormControl, ButtonApp, PositionAPI } from '@/shared';
import { formErrorHandler } from '@/shared/ui/form/utils';
import { ref } from 'vue';

const props = withDefaults(
  defineProps<{name?: string; id: string;}>(),
  { name: '' }
);

const emit = defineEmits<{(e: 'executed', val: string): void}>();

const form = ref({name: props.name});
const error = ref();

const submitHandler = formErrorHandler(error, async (event: Event) => {
  event.preventDefault();

  const api = new PositionAPI();
  const result = await api.rename(props.id, form.value.name);

  emit('executed', result);
})
</script>

<template>
  <FormApp :error="error" class="feature-form-horizontal" @submit="submitHandler">
    <FormControl v-model="form.name" placeholder="Введите название позиции" />
    <ButtonApp label="Сохранить" type="submit" />
  </FormApp>
</template>

<style src="@/shared/ui/features/features.scss"></style>
