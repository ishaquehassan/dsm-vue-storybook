<template>
  <div class="logo">
    <img :src="require('./../../../assets/images/logo_small.svg')" />
    <img
      :src="require('./../../../assets/images/logo_small_2.svg')"
      v-if="!isSmall"
      class="hidden_mobile"
    />
  </div>
</template>
<script lang="ts">
export default {
  name: "AGLogo",
  props: {
    isSmall: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style scoped lang="scss">
@import "component.scss";
</style>
