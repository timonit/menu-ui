<script setup lang="ts">
import { RouterView } from 'vue-router';
import { HeaderApp } from '@/widgets';
</script>

<template>
  <div class="layout">
    <HeaderApp />
  
    <RouterView />
  </div>
</template>

<style src="./layout.scss"></style>
