<script setup lang="ts">
import { FormApp, FormControl, ButtonApp, CategoryAPI } from '@/shared';
import { ref } from 'vue';

const props = withDefaults(
  defineProps<{description?: string; id: string;}>(),
  { description: '' }
);

const emit = defineEmits<{(e: 'executed', val: string): void}>();

const form = ref({description: props.description});

const submitHandler = async (event: Event) => {
  event.preventDefault();

  const api = new CategoryAPI();
  const result = await api.changeDescription(props.id, form.value.description);

  emit('executed', result);
}
</script>

<template>
  <FormApp @submit="submitHandler">
    <FormControl v-model="form.description" placeholder="description" />
    <ButtonApp label="change" type="submit" />
  </FormApp>
</template>
