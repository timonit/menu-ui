<script setup lang="ts">
import { FormApp, FormControl, ButtonApp, PositionAPI } from '@/shared';
import { ref } from 'vue';

const props = withDefaults(
  defineProps<{photo?: string; id: string;}>(),
  { photo: '' }
);

const emit = defineEmits<{(e: 'executed', val: string): void}>();

const form = ref({photo: props.photo});

const submitHandler = async (event: Event) => {
  event.preventDefault();

  const api = new PositionAPI();
  const result = await api.changePhoto(props.id, form.value.photo);

  emit('executed', result);
}
</script>

<template>
  <FormApp class="feature-form-horizontal" @submit="submitHandler">
    <FormControl v-model="form.photo" placeholder="photo" />
    <ButtonApp label="Изменить" type="submit" />
  </FormApp>
</template>
