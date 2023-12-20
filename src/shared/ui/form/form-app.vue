<script setup lang="ts">
const emit = defineEmits<{(event: 'submit', val: Event): void}>();
</script>

<template>
  <form @submit.prevent="emit('submit', $event)">
    <slot></slot>
  </form>
</template>
