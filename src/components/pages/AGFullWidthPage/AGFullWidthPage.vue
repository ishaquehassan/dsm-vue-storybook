<template>
  <div>
    <slot name="toolbar"></slot>
    <div>
      <slot name="side-menu"></slot>
      <slot name="content-area"></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "AGFullWidthPage",
};
</script>
