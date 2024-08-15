<template>
    <div>
        <div v-if="loading">
            <h1>Loading data ! Please wait</h1>
        </div>
        <div v-else-if="errorMessage!==null">
            <h1>Error ! {{ errorMessage }}</h1>
        </div>
        <div v-else>
            <div class="top-container">
            <h1>Custom Scroll Indicator</h1>
            <div class="scroll-progress-tracking-container">
                <div class="current-progress-bar" :style="{width: `${scrollPercentage}%`}">

                </div>
            </div>
        </div>
        <div class="data-container">
            <p v-for="dataItem in dataValue" :key="dataItem.id">
                {{ dataItem.title }}
            </p>
        </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue';

const props=defineProps({
    url:{
        type:String,
        require:true,
    }
})

const dataValue=ref([]);
const loading=ref(false);
const errorMessage=ref(null);
const scrollPercentage=ref(0);

onMounted(async ()=>{
    try{
        loading.value=true;
        const response=await fetch(props.url);
        const data=await response.json();
        if(data&&data.products&&data.products.length>0){
            loading.value=false;
            dataValue.value=data.products;
            //console.log(dataValue.value);
        }
    }catch(e){
        console.log(e);
        loading.value=false
        errorMessage.value=e.message;
    }

    window.addEventListener("scroll",handleScrollPercentage);
})

onUnmounted(()=>{
    window.removeEventListener("scroll",handleScrollPercentage);
})

const handleScrollPercentage=()=>{
    console.log(
        document.body.scrollTop,
        document.documentElement.scrollTop,
        document.documentElement.scrollHeight,
        document.documentElement.clientHeight,
    );
    
    const howMuchScrolled=document.body.scrollTop||document.documentElement.scrollTop;

    const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

    scrollPercentage.value=((howMuchScrolled/height)*100)
}


</script>

<style lang="scss" scoped>
.top-container{
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
    text-align: center;
    background-color: #075b0a;
    color: #fff;
}

.scroll-progress-tracking-container{
    width: 100%;
    height: 10px;
    background: #aaf900;
}

.current-progress-bar{
    height: 10px;
    background: #8b02b5;
    width: 0%;
}

.data-container{
    text-align: center;
    margin-top:150px ;
}
</style>