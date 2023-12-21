<script setup lang="ts">
import { useUser } from '@/entities';
import { AddCategory } from '@/features';
import { useRouter } from 'vue-router';

const router = useRouter();
const userStore = useUser();

if (!userStore.isAuthorized) router.push('/');
</script>

<template>
  <main class="page flex page_content-center">
    <AddCategory class="page__form page_center"/>
  </main>
</template>

<style src="./page.scss"></style>
