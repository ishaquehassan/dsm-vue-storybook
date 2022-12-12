<template>
  <li>
    <a v-bind:class="{ active: active }" :href="$emit('click')">
      <i><img :src="icon" /></i> {{ name }}</a
    >
  </li>
</template>

<script lang="ts">
export default {
  name: "AGSideMenuItem",
  props: {
    name: {
      type: String,
    },
    icon: {
      type: Object,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style scoped lang="scss">
@import "component.scss";
</style>
