<template>
  <b-form-group :label="label" label-for="ag_email" class="form-group">
    <b-form-input
      id="ag_email"
      :v-on:input="updateValue"
      v-bind:value="value"
    ></b-form-input>
  </b-form-group>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AGTextField",
  props: {
    isSmall: {
      type: Boolean,
      default: false,
    },
    value: {
      default: "",
    },
    label: {
      type: String,
      required: true,
    },
  },
  methods: {
    updateValue(value) {
      console.log(value);
      this.$emit("input", value);
    },
  },
});
</script>
<style scoped lang="scss">
@import "component.scss";
</style>
