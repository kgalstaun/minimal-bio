<template>
  <main class="max-w-screen-md mx-auto px-sm">
    <div class="pt-xl min-h-screen flex flex-col items-center">
      <Header class="mb-md" />
      <Nav class="mb-md" />
      <Main class="pt-md" />
      <Footer class="mt-auto pt-lg pb-xl" />
    </div>
  </main>
</template>

<script>
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import Main from "@/components/Main.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: { Header, Nav, Main, Footer },
  setup() {},
};
</script>
