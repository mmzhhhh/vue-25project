<template>
    <div class="tree-view-container">
        <MenuList :list="menus"/>
    </div>
</template>

<script setup>
import { menus } from './data';
import MenuList from './MenuList.vue';

// 通过props接受外部传递的数据，并提供一些配置选项
const props=defineProps({
    menus:{
        type:Array,
        default:()=>[],
    }
})
</script>

<style lang="scss" scoped>
.tree-view-container{
    min-height: 100vh;
    width: 350px;
    background: rgb(0, 71, 110);
}
</style>