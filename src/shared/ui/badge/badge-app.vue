<script setup lang="ts">
const props = withDefaults(
  defineProps<{color?: 'success' | 'danger' | 'dark' | 'transparent'}>(),
  {color: 'transparent'}
);
</script>

<template>
  <div
    :class="[
      'badge',
      'inline',
      'text-medium',
      `bg-${props.color}`,
      `text-${props.color === 'transparent' ? 'dark' : 'light'}`
    ]"
  >
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
  .badge {
    border-radius: 1em;
    vertical-align: top;
    padding: .2em .5em;
    font-size: .7rem;
  }
</style>
