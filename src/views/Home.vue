<template>
  <div id="home" v-if="post">
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
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import QueryService from "@/service/QueryService";
import PostQuery from "@/queries/post";

export default {
  setup() {
    onMounted(() => fetchData());

    let post = ref(null);

    async function fetchData() {
      let data = await QueryService.fetch(PostQuery, { title: "home" });
      post.value = data.posts[0];
    }

    return {
      post,
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
