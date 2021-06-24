<template>
  <div id="home">
    <template v-if="post">
      <div v-html="post.intro.html" class="mt-md"></div>

      <ul id="array-rendering">
        <li
          v-for="(item, index) in post.list"
          :key="index"
          class="flex flex-row mb-md"
        >
          <span class="w-1/3 pr-md">{{ item.title }}</span>
          <span class="w-2/3">{{ item.text }}</span>
        </li>
      </ul>
    </template>

    <template v-if="error">
      <message :type="'error'">{{ getConstant("messages", "error") }}</message>
    </template>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import QueryService from "@/service/QueryService";
import PostQuery from "@/queries/post";
import Message from "@/components/Message";
import ConstantService from "@/service/ConstantService";

export default {
  components: { Message },
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

<style lang="scss" scoped>
#home {
  width: 100%;

  ul li {
    span:first-child {
      font-weight: bold;
    }
  }
}
</style>
