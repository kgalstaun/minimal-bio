<template>
  <p :class="type"><slot /></p>
</template>

<script>
export default {
  props: {
    type: String,
  },
};
</script>
