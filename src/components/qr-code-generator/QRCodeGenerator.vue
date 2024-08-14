<template>
    <div class="container">
        <h1>QR Code Generator</h1>
        <div>
            <input 
            type="text" 
            placeholder="Enter your values here" 
            name="qr-code"
            v-model="input"
            />
            <button @click="handleGeneratorQrCode" :disabled="input&&input.trim()!==''?false:true">Generator</button>
        </div>
        <div>
            <vue-qrcode :value=qrCode :options="{width:400}"/>
        </div>
    </div>
</template>

<script setup>
import VueQrcode from '@chenfengyuan/vue-qrcode';
import { ref } from 'vue';

const input = ref('');
const qrCode = ref('');

const handleGeneratorQrCode=()=>{
    qrCode.value=input.value
}
</script>

<style lang="scss" scoped>
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center
}
</style>