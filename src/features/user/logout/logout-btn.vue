<script setup lang="ts">
import { useUser } from '@/entities';
import { useRouter } from 'vue-router';

const router = useRouter();
const userStore = useUser();

const handle = async () => {
  userStore.logout();
  router.push('/');
};
</script>

<template>
  <span class="logout-btn text-bold" @click="handle" >Выйти</span>
</template>

<style src="@/shared/ui/form/form.scss"></style>

<style scoped lang="scss">
.logout-btn {
  cursor: pointer;
}
</style>
