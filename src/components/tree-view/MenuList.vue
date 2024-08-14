<template>
    <ul class="menu-list-container">
        <MenuItem v-for="(listItem,index) in list" :key="index" :item="listItem"/>
    </ul>
</template>

<script setup>
import MenuItem from './MenuItem.vue';

const props = defineProps({
    list: {
        type: Array,
        default: () => []
    }
})
</script>

<style lang="scss" scoped>
.menu-list-container {
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
}
</style>