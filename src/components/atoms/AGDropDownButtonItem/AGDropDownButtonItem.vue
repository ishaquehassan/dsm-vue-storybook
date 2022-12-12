<template>
  <b-dropdown-item v-bind:class="{ 'no-icon': !icon }" @click="$emit('click')"
    ><i class="icon" v-if="icon"><img :src="icon" /></i>{{ name }}
  </b-dropdown-item>
</template>
<script lang="ts">
export default {
  name: "AGDropDownButtonItem",
  props: {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped lang="scss">
@import "component.scss";
</style>
