<script setup lang="ts">
</script>

<template>
  <header class="header shadow-down flex">
    <div class="header_wrapper flex">
      <div class="header__block header__block_left text-bold">Brend</div>
  
      <nav class="nav flex">
        <RouterLink class="header__nav-link text-medium" to="/">Меню</RouterLink>
        <RouterLink class="header__nav-link text-medium" to="/add-category">Добавить категорию</RouterLink>
      </nav>
  
      <div class="header__block header__block_right text-bold">login</div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  padding: 1em;
  background-color: var(--background-color);
  justify-content: center;

  .header_wrapper {
    width: 1024px;
  }

  .nav {
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    gap: 1em;
  }

  .header__nav-link {
    color: rgb(250, 200, 150);
    text-decoration: none;
    border-bottom: solid 2px transparent;
    
    &:hover, &.router-link-active {
      color: var(--main-color);
      border-bottom: solid 2px var(--main-color);
    }
  }

  .header__block {
    width: 20%;

    &.header__block_left {
      text-align: start;
    }
  
    &.header__block_right {
      text-align: end;
    }
  }
}
</style>
