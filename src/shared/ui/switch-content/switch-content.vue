<script setup lang="ts">
import { ButtonApp } from '@/shared';
import { type Component } from 'vue';

const props = withDefaults(
  defineProps<{
    triggerLabel?: string;
    triggerComponent?: Component;
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

    <template v-if="props.triggerComponent && !props.show">
      <props.triggerComponent class="switcher__trigger" @click="emit('update:show', true)" />
    </template>
    <ButtonApp v-if="!props.triggerComponent && !props.show" class="switcher__trigger" :label="props.triggerLabel" @click="emit('update:show', true)" />
    <ButtonApp v-if="props.show" :label="props.cancelLabel" @click="emit('update:show', false)" />
  </div>
</template>

<style scoped>
.switcher__trigger {
  margin: 0 .4em;
  cursor: pointer;
}
</style>
