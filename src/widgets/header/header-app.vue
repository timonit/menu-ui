<script setup lang="ts">
</script>

<template>
  <header class="header">
    <nav class="nav">
      <RouterLink class="header__nav-link" to="/">Меню</RouterLink>
      <RouterLink class="header__nav-link" to="/add-category">Добавить категорию</RouterLink>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header {
  padding: 1em;
  background-color: var(--background-color);
  box-shadow: 0 5px 5px rgba($color: #000000, $alpha: 0.2);

  .nav {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  .header__nav-link {
    font-weight: 600;
    color: rgb(250, 200, 150);
    text-decoration: none;
    
    &:hover, &.router-link-active {
      color: var(--main-color);
      border-bottom: solid 2px var(--main-color);
    }
  }
}
</style>
