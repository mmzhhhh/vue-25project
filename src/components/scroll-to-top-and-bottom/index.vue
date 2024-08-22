<template>
    <h1 v-if="pending">Loading data ! Please wait...</h1>
    <h1 v-if="error">Error occured ! Please try again...</h1>
    <div v-if="data&&data.products&&data.products.length" style="display: flex;justify-content: center;align-items: center;flex-direction: column;">
        <h1>Scroll To Top And Bottom Feature</h1>
        <h3>This is the top section</h3>
        <button @click="handleScrollToBottom">Scroll To Bottom</button>
        <div ref="topRef"></div>
        <ul style="list-style: none;">
            <li v-for="(item,index) in data.products" :key="index">{{item.title}}</li>
        </ul>
        <button @click="handleScrollToTop">Scroll To Top</button>
        <div ref="bottomRef"></div>
        <h3>This is the bottom of the page</h3>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import useFetch from '../use-fetch/useFetch';
const {data,error,pending}=useFetch("https://dummyjson.com/products?limit=100",{});

const topRef=ref(null);
const bottomRef=ref(null);

const handleScrollToBottom=()=>{
    bottomRef.value.scrollIntoView({behavior:"smooth"})
}


const handleScrollToTop=()=>{
    topRef.value.scrollIntoView({behavior:"smooth"})
}

</script>

<style lang="scss" scoped>

</style>