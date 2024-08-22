<template>
  <div>
    <h1>Use Window resize Hook</h1>
    <p>Width is {{ width }}</p>
    <p>Height is {{ height }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import useWindowResize from "./index.js";

const windowSize = useWindowResize();
const width = computed(() => windowSize.value.width);
const height = computed(() => windowSize.value.height);
</script>

<style lang="scss" scoped></style>
