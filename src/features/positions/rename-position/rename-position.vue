<script setup lang="ts">
import { FormApp, FormControl, ButtonApp, PositionAPI } from '@/shared';
import { ref } from 'vue';

const props = withDefaults(
  defineProps<{name?: string; id: string;}>(),
  { name: '' }
);

const emit = defineEmits<{(e: 'executed', val: string): void}>();

const form = ref({name: props.name});

const submitHandler = async (event: Event) => {
  event.preventDefault();

  const api = new PositionAPI();
  const result = await api.rename(props.id, form.value.name);

  emit('executed', result);
}
</script>

<template>
  <FormApp @submit="submitHandler" style="display: inline;">
    <FormControl v-model="form.name" placeholder="name" style="display: inline;" />
    <ButtonApp label="change" type="submit" />
  </FormApp>
</template>
