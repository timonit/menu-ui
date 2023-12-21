<script setup lang="ts">
import { FormApp, FormControl, ButtonApp, CategoryAPI } from '@/shared';
import { formErrorHandler } from '@/shared/ui/form/utils';
import { ref } from 'vue';

const props = withDefaults(
  defineProps<{description?: string; id: string;}>(),
  { description: '' }
);

const emit = defineEmits<{(e: 'executed', val: string): void}>();

const form = ref({description: props.description});
const error = ref();

const submitHandler = formErrorHandler(async (event: Event) => {
  event.preventDefault();

  const api = new CategoryAPI();
  const result = await api.changeDescription(props.id, form.value.description);

  emit('executed', result);
})
</script>

<template>
  <FormApp :error="error" class="feature-form-horizontal w-full items-start" @submit="submitHandler">
    <FormControl
      v-model="form.description"
      placeholder="Введите описание категории"
      type="textarea"
      :rows="5"
      class="w-full"
    />
    <ButtonApp label="Сохранить" type="submit" />
  </FormApp>
</template>
