<script setup lang="ts">
import { FormApp, FormControl, ButtonApp, CategoryAPI } from '@/shared';
import { formErrorHandler } from '@/shared/ui/form/utils';
import { ref } from 'vue';

const props = defineProps<{categoryID: string;}>();
const emit = defineEmits<{(e: 'executed', val: string[]): void}>();

const form = ref({
  name: '',
  price: 0,
  photo: '',
  ingredients: '',
});
const error = ref();

const submitHandler = formErrorHandler(error, async (event: Event) => {
  event.preventDefault();

  const api = new CategoryAPI();
  const result = await api.addPosition(
    props.categoryID,
    {
      ...form.value,
      price: Number(form.value.price),
      ingredients: form.value.ingredients.trim() ? form.value.ingredients.split(',') : [],
    }
  );

  emit('executed', result);
})
</script>

<template>
  <FormApp :error="error" class="add-position-to-category" @submit="submitHandler">
    <label class="form__label form__label_size_md">Добавить позицию</label>
    <FormControl class="form__form-control_spacing" v-model="form.name" label="Название позиции" placeholder="Введите название позиции" />
    <FormControl class="form__form-control_spacing" v-model="form.price" label="Цена" placeholder="Введите цену" type="number" />
    <FormControl class="form__form-control_spacing" v-model="form.ingredients" label="Ингредиенты" placeholder="Введите ингредиенты через запятую (лук, морковь, кортошка и т. д.)" />
    <FormControl class="form__form-control_spacing" v-model="form.photo" label="Фото" placeholder="Вставьте ссылку на изображение" />

    <div class="button-tools button-tools_align_end">
      <ButtonApp label="Добавить" type="submit" />
    </div>
  </FormApp>
</template>

<style src="@/shared/ui/form/form.scss"></style>
<style scoped lang="scss">
.add-position-to-category {

}
</style>
