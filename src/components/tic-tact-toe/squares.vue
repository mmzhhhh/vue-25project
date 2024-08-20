<template>
    <button class="square" @click="onClick">
        {{ value }}
    </button>
</template>

<script setup>
const props=defineProps({
    value:{
        type:String,
    },
    onClick:{
        type:Function,
    }
})
</script>

<style lang="scss" scoped>
.square{
    border: 1px solid red;
    float: left;
    font-size: 40px;
    height: 100px;
    padding: 0;
    text-align: center;
    width: 100px;
    margin-right: -1px;
    margin-top: -1px;
    cursor: pointer;
}
</style>