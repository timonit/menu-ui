<script setup lang="ts">
</script>

<template>
  <header class="header shadow-down">
    <nav class="nav flex">
      <RouterLink class="header__nav-link text-medium" to="/">Меню</RouterLink>
      <RouterLink class="header__nav-link text-medium" to="/add-category">Добавить категорию</RouterLink>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header {
  padding: 1em;
  background-color: var(--background-color);

  .nav {
    align-items: center;
    gap: 1em;
  }

  .header__nav-link {
    color: rgb(250, 200, 150);
    text-decoration: none;
    
    &:hover, &.router-link-active {
      color: var(--main-color);
      border-bottom: solid 2px var(--main-color);
    }
  }
}
</style>
