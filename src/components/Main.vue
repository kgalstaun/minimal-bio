<template>
  <main class="w-full flex items-start">
    <transition name="fade" mode="out-in">
      <Router-view :key="'a' + $route.path" />
    </transition>
  </main>
</template>

<style lang="scss" scoped>
.fade-enter-active {
  transition: opacity 0.35s ease;
}

.fade-enter-from {
  opacity: 0;
}
</style>
