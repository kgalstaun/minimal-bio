<template>
  <main class="max-w-screen-md mx-auto px-sm">
    <div class="mt-xl flex flex-col items-center">
      <Header class="mb-md" />
      <Nav class="mb-md" />
      <Main class="pt-md" />
    </div>
  </main>
</template>

<script>
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import Main from "@/components/Main.vue";

export default {
  components: { Header, Nav, Main },
  setup() {},
};
</script>
