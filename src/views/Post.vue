<template>
  <div class="w-full">
    <template v-if="post">
      <div v-html="post.intro.html" class="mt-md"></div>

      <List :post="post" />
    </template>

    <template v-if="error">
      <Message :type="'error'">{{ getConstant("messages", "error") }}</Message>
    </template>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import QueryService from "@/service/QueryService";
import PostQuery from "@/queries/post";
import Message from "@/components/Message";
import ConstantService from "@/service/ConstantService";
import List from "@/components/List";

export default {
  components: { Message, List },
  setup() {
    onMounted(() => fetchData());

    const getConstant = ConstantService.get;
    let post = ref(null);
    let error = ref(false);

    async function fetchData() {
      QueryService.fetch(PostQuery, { title: "home" })
        .then((data) => {
          if (data.posts.length > 0) {
            post.value = data.posts[0];
          } else error.value = true;
        })
        .catch(() => (error.value = true));
    }

    return {
      post,
      error,
      getConstant,
    };
  },
};
</script>
