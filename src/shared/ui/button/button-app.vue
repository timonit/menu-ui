<script setup lang="ts">
const props = withDefaults(
  defineProps<{label?: string; type?: 'submit' | 'reset' | 'button'}>(),
  { type: 'button', label: '' }
);

const emit = defineEmits<{(e: 'click', ev:any): void}>();
</script>

<template>
  <button
    :type="props.type"
    @click="emit('click', $event)"
    class="button bg-success text-light text-medium"
  >
    <template v-if="!$slots.default">
      {{ props.label }}
    </template>
    <slot></slot>
  </button>
</template>

<style src="./button.scss"></style>
