<template>
    <div class="light-dark-mode" :data-theme="theme">
        <div class="container">
            <p>Hello World !</p>
            <button @click="handleToggleTheme">Change Theme</button>
        </div>
    </div>
</template>

<script setup>
import { useLocalStorage } from './useLocalStorage';


const theme=useLocalStorage("theme","dark");
const handleToggleTheme=()=>{
    theme.value=theme.value==="light"?"dark":"light"
    console.log(theme.value);
}
console.log(theme.value);

</script>

<style lang="scss" scoped>
[data-theme="dark"]{
    --background:#000;
    --text-primary:#fff;
    --button-bg:#fff;
    --button-text:#000;
}

[data-theme="light"]{
    --background:#ffffff;
    --text-primary:#000;
    --button-bg:#000;
    --button-text:#ffffff;
}

.light-dark-mode{
    display: flex;
    height: 100vh;
    background-color: var(--background);
    flex-direction: column;
    justify-content: center;
    font-size: 20px;
    transition: all .3s;
}

.light-dark-mode .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
}

.light-dark-mode .container p{
    color: var(--text-primary);
    font-size: 40px;
    margin: 0;
}

.light-dark-mode .container button{
    background-color: var(--button-bg);
    border: 1px solid var(--button-bg);
    color: var(--button-text);
    padding: 12px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
}
</style>