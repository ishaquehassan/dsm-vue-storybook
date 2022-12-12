<template>
  <div class="sidebar_wrap">
    <AGLogo />
    <ul>
      <slot />
    </ul>
  </div>
</template>

<script lang="ts">
import AGLogo from "@/components/atoms/AGLogo/AGLogo.vue";

export default {
  name: "AGSideMenu",
  components: {
    AGLogo,
  },
};
</script>
<style lang="scss">
@import "component.scss";
</style>
