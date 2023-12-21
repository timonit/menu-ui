<script setup lang="ts">
const props = defineProps<{error?: string}>();
const emit = defineEmits<{(event: 'submit', val: Event): void}>();
</script>

<template>
  <form @submit.prevent="emit('submit', $event)">
    <span v-if="props.error" class="text-danger">{{ props.error }}</span>
    <slot></slot>
  </form>
</template>
