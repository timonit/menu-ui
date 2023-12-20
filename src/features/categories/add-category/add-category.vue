<script setup lang="ts">
import { FormApp, FormControl, CategoryAPI, ButtonApp } from '@/shared';
import { ref } from 'vue';

const form = ref({
  name: '',
  description: '',
});

const addCategory = async () => {
  const api = new CategoryAPI();
  await api.create({
    ...form.value,
    positions: [],
  });
};
</script>

<template>
  <FormApp class="form_spacing form-add-category shadow-center" @submit="addCategory">
    <label class="form__label form__label_size_md form__label_align_center">Создание категории</label>
    <FormControl class="form__form-control_spacing" label="Название категории" placeholder="Напишите здесь название категории" v-model="form.name" />
    <FormControl class="form__form-control_spacing" label="Описание" placeholder="Описание" v-model="form.description" type="textarea" :rows="3" />
    <div class="button-tools button-tools_align_end">
      <ButtonApp label="Add" type="submit" />
    </div>
  </FormApp>
</template>

<style src="@/shared/ui/form/form.scss"></style>

<style scoped lang="scss">
.form-add-category {
  background-color: var(--background-color);
}
</style>
