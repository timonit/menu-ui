<script setup lang="ts">
import { ButtonApp, CategoryAPI } from '@/shared';

const props = defineProps<{id: string;}>();
const emit = defineEmits<{(e: 'executed', val: string): void}>();

const handler = async (event: Event) => {
  event.preventDefault();

  const api = new CategoryAPI();
  await api.remove(props.id);

  emit('executed', props.id);
}
</script>

<template>
    <ButtonApp style="background: red" label="Delete" @click="handler" />
</template>
