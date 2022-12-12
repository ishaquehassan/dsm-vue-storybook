<template>
  <b-button :variant="type">
    <slot></slot>
  </b-button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

enum ButtonType {
  primary = "primary",
  link = "link",
  danger = "danger",
}

export default defineComponent({
  name: "ButtonOne",
  props: {
    type: {
      type: String as PropType<ButtonType>,
      default: ButtonType.primary,
    },
  },
  data() {
    return {
      modalShow: false,
    };
  },
});
</script>

<style scoped lang="scss">
@import "component.scss";
</style>
