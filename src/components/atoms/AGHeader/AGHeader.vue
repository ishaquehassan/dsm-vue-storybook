<template>
  <div class="ag_header">
    <b-container fluid="tag" class="header_inner_row">
      <slot></slot>
    </b-container>
  </div>
</template>
<script lang="ts">
export default {
  name: "AGHeader",
};
</script>
<style scoped lang="scss">
@import "component.scss";
</style>
