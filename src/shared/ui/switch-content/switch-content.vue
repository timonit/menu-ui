<script setup lang="ts">
import { ButtonApp } from '@/shared';

const props = withDefaults(
  defineProps<{
    triggerLabel?: string;
    cancelLabel?: string;
    show: boolean;
  }>(),
  {
    triggerLabel: 'Изменить',
    cancelLabel: 'Отмена'
  }
);

const emit = defineEmits<{(e: 'update:show', v: boolean): void}>();

</script>

<template>
  <div class="switcher">
    <template v-if="!props.show">
      <slot></slot>
    </template>
    
    <template v-if="props.show">
      <slot name="switch-content"></slot>
    </template>

    <ButtonApp v-if="!props.show" :label="props.triggerLabel" @click="emit('update:show', true)" />
    <ButtonApp v-if="props.show" :label="props.cancelLabel" @click="emit('update:show', false)" />
  </div>
</template>

<style scoped>
button {
  margin-left: 0.7em;
}
</style>
