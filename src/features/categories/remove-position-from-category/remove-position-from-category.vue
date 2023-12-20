<script setup lang="ts">
import { ButtonApp, CategoryAPI } from '@/shared';

const props = defineProps<{categoryID: string; positionID: string}>();

const emit = defineEmits<{(e: 'executed', val: string): void}>();

const handler = async (event: Event) => {
  event.preventDefault();

  const api = new CategoryAPI();
  await api.removePositionFrom(props.categoryID, props.positionID);

  emit('executed', props.positionID);
}
</script>

<template>
  <ButtonApp style="background: red" label="Delete" @click="handler" />
</template>
