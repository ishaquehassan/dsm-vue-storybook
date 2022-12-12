<template>
  <b-dropdown id="user_dropdown" class="ag_user_account">
    <template #button-content><slot name="label"></slot></template>
    <slot></slot>
  </b-dropdown>
</template>
<script lang="ts">
import { PropType } from "vue";

interface AGButtonDropDownItemPropType {
  name: string;
  icon: object;
}

export default {
  name: "AGButtonDropDown",
};
</script>
<style lang="scss">
@import "component.scss";
</style>
