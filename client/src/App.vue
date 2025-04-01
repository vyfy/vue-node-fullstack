<template>
  <div id="app">
    <!-- Навигационное меню -->
    <nav>
      <router-link to="/">Главная</router-link> |
      <router-link to="/about">О нас</router-link>
    </nav>
    
    <!-- Здесь будут отображаться страницы -->
    <!-- Обертка для анимированного router-view -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
// Логика приложения (если нужна)
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav {
  padding: 20px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0 10px;
}
nav a.router-link-exact-active {
  color: #42b983;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>