<script setup lang="ts">
</script>

<template>
  <header class="header">
    <nav class="nav">
      <RouterLink to="/">Меню</RouterLink>
      <RouterLink to="/add-category">Добавить категорию</RouterLink>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header {
  padding: 1em;
  background-color: var(--main-color);

  .nav {
    display: flex;
    align-items: center;
    gap: 1em;
  }
}
</style>
