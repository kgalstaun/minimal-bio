<template>
  <main class="max-w-screen-md mx-auto px-sm">
    <div v-if="!error" class="pt-xl min-h-screen flex flex-col items-center">
      <Header class="mb-md">{{ headerText }}</Header>
      <Nav class="mb-md" />
      <Main class="pt-md" />
      <Footer class="mt-auto pt-lg pb-xl">{{ footerText }}</Footer>
    </div>
  </main>
</template>

<script>
import { ref, onMounted } from "vue";
import QueryService from "@/service/QueryService";
import MetaQuery from "@/queries/meta";
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import Main from "@/components/Main.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: { Header, Nav, Main, Footer },
  setup() {
    onMounted(() => fetchData());

    let error = ref(false);
    let headerText = ref(null);
    let footerText = ref(null);

    async function fetchData() {
      QueryService.fetch(MetaQuery)
        .then((data) => {
          headerText.value = data.metas[0].headerText;
          footerText.value = data.metas[0].footerText;
        })
        .catch(() => (error.value = true));
    }

    return {
      error,
      headerText,
      footerText,
    };
  },
};
</script>
