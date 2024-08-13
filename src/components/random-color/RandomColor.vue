<template>
    <div :style="{ width: '100vw', height: '100vh', backgroundColor: color }">
        <button @click="typeOfColor='hex'">Create HEX Color</button>
        <button @click="typeOfColor='rgb'">Create RGB Color</button>
        <button @click="generateColor">Generate Random Color</button>
        <div
            style="display: flex;justify-content: center;align-items: center;font-size: 60px;flex-direction: column;margin-top: 50px;color: #fff;">
            <h3>{{ typeOfColor === 'hex' ? "Hex Color" : "Rgb Color" }}</h3>
            <h1>{{ color }}</h1>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';

onMounted(()=>{
    generateColor();
})
const color = ref('#000000');
const typeOfColor = ref('hex');

const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
}


const handleCreateHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[randomColorUtility(hex.length)];
    }
    console.log(hexColor);
    color.value = hexColor;
}

const handleCreateRgbColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    color.value = (`rgb(${r},${g},${b})`)
    console.log(color.value);
}

const generateColor=()=>{
    if(typeOfColor.value==='hex') handleCreateHexColor();
    else handleCreateRgbColor();
}

watch(typeOfColor,()=>{
    generateColor();
})
</script>

<style lang="scss" scoped></style>