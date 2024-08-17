<template>
    <div class="main">
        <button @click="showModalPopup = !showModalPopup">Open Modal Popup</button>
        <Modal v-if="showModalPopup" :id="'Custom-id'" :header="'Customized Header'" :bod="'Customized body'"
            :footer="'Customized Footer'" @close="onClose"/>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Modal from './modal.vue';

const showModalPopup = ref(false);

const onClose=()=>{
    showModalPopup.value=false
}
</script>

<style lang="scss" scoped>
.main{
    text-align: center;
}
</style>