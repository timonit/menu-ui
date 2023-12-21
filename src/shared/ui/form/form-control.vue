<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label?: string;
    modelValue: any;
    placeholder?: string;
    type?: 'text' | 'number' | 'url' | 'textarea' | 'password';
    rows?: number;
  }>(),
  {
    type: 'text',
    rows: 1,
  }
);

const emit = defineEmits<{(e: 'update:modelValue', v: any): void}>()
</script>

<template>
  <div class="form-control">
    <template v-if="props.label">
      <label class="form-control__label">{{ label }}</label>
    </template>

    <textarea
      v-if="props.type === 'textarea'"
      :value="modelValue"
      @input="emit(
        'update:modelValue',
        // @ts-ignore
        $event.target?.value
      )"
      :placeholder="props.placeholder"
      :rows="props.rows"
      class="form-control__textarea"
    />
    
    <input
      v-else
      :value="modelValue"
      @input="emit(
        'update:modelValue',
        // @ts-ignore
        $event.target?.value
      )"
      :placeholder="props.placeholder"
      :type="props.type"
      class="form-control__input"
    />
  </div>
</template>

<style scoped lang="scss">
.form-control {

  .form-control__label {
    font-weight: 600;
    display: block;
    margin-bottom: .3em;
  }

  .form-control__input {
    outline: none;
    color: var(--text-color);
    width: 100%;
    background: transparent;
    border: none;
    line-height: 1.8em;
    border-bottom: solid 2px white;

    &::placeholder {
      color: var(--text-secondary-color);
    }
  }

  .form-control__textarea {
    color: var(--text-color);
    width: 100%;
    background: transparent;
    border: solid 2px white;
    padding: .3em;
    box-sizing: border-box;

    &::placeholder {
      color: var(--text-secondary-color);
    }
  }
}
</style>
