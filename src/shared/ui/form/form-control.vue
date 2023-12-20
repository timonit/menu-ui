<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label?: string;
    modelValue: any;
    placeholder?: string;
    type?: 'text' | 'number' | 'url';
  }>(),
  {
    type: 'text',
  }
);

const emit = defineEmits<{(e: 'update:modelValue', v: any): void}>()
</script>

<template>
  <div>
    <template v-if="props.label">
      <label>{{ label }}</label>
    </template>
    <input
      :value="modelValue"
      @input="emit('update:modelValue', $event.target?.value)"
      :placeholder="props.placeholder"
      :type="props.type"
    />
  </div>
</template>
