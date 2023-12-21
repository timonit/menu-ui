<script setup lang="ts">
import { useUser } from '@/entities';
import { FormApp, FormControl, ButtonApp } from '@/shared';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const form = ref({
  login: '',
  password: '',
});
const router = useRouter();
const userStore = useUser();

const handle = async () => {
  await userStore.login(form.value);
  router.push('/');
};
</script>

<template>
  <FormApp class="form_spacing login-form shadow-center bg-dark" @submit="handle">
    <label class="form__label form__label_size_md form__label_align_center">Вход в админку</label>
    <FormControl class="form__form-control_spacing" label="Логин" placeholder="Введите логин" v-model="form.login" />
    <FormControl class="form__form-control_spacing" label="Пароль" placeholder="Введите пароль" v-model="form.password" type="password" />
    <div class="button-tools button-tools_align_end">
      <ButtonApp label="Войти" type="submit" />
    </div>
  </FormApp>
</template>

<style src="@/shared/ui/form/form.scss"></style>

<style scoped lang="scss">

</style>
