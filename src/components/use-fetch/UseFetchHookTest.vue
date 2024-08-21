<template>
    <div>
        <h1>Use Fetch Hook</h1>
        <h3 v-if="pending">Pending ! Please wait</h3>
        <h3 v-else-if="error">{{ error }}</h3>
        <div v-else-if="data&&data.products&&data.products.length">
            <p v-for="dataItem in data.products" :key="dataItem.key">
                {{ dataItem.title }}
            </p>
        </div>
    </div>
</template>

<script setup>
import useFetch from './useFetch';

const {data,error,pending}=useFetch("https://dummyjson.com/products",{});
</script>
