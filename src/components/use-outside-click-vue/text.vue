<template>
    <div style="display: flex;align-items: center;justify-content: center;">
        <button v-if="!showContent" @click="showContent=!showContent">Show Content</button>
        <div v-else ref="contentRef">
            <h1>This is random content</h1>
            <p>
                Please click outside of this to close this. It won't close if you click inside of this content
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import useOutsideClick from './index.js'
const showContent=ref(false);
const contentRef = ref(null);
useOutsideClick(contentRef,()=>{showContent.value=!showContent.value})
</script>