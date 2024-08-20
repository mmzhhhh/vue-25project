<template>
    <ul v-if="data&&data.length">
        <li v-for="(item,index) in data" :key="index" @click="handleClick">
            {{ item }}
        </li>
    </ul>
    <p v-else>
        We don't have any data...
    </p>
</template>

<script setup>
const props = defineProps({
  data:{
    type:String,
  },
  handleClick:{
    type:Function,
  }
});
</script>

<style lang="scss" scoped>

</style>