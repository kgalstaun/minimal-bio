<template>
  <main class="w-full flex items-start">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="'a' + $route.path" />
      </transition>
    </router-view>
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
