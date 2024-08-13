<template>
    <!-- 加载状态 -->
    <div v-if="loading">
        <h1>Loading data ! Please wait</h1>
    </div>
    <div v-else-if="errorMsg!==null">
        <h1>Error occured! {{ errorMsg }}</h1>
    </div>
    <div v-else class="container">
        <v-icon name="bi-arrow-left-circle-fill" scale="2" class="arrow arrow-left" @click="handlePrevious"/>
        <div v-if="images && images.length">
            <img v-for="(imageItem, index) in images" :key="index" :src="imageItem.download_url"
                :alt="imageItem.download_url" :class="currentSlide===index?'current-image':'current-image hide-current-image'">
        </div>
        <v-icon name="bi-arrow-right-circle-fill" scale="2" class="arrow arrow-right" @click="handleNext"/>
        <span class="circle-indicators" v-if="images && images.length">
            <button 
            v-for="(_, index) in images" 
            :key="index" 
            :class="currentSlide===index?'current-indicator':'current-indicator inactive-indicator'"
            @click="currentSlide =index">

            </button>
        </span>
    </div>
</template>

<script setup>
//网页API
//https://picsum.photos/v2/list
import { onMounted, ref } from 'vue';

//从组件中获取链接、个数、页数
const props = defineProps({
    url: {
        typeof: String,
        require: true,
    },
    limit: {
        typeof: Number,
        require: true
    },
    page: {
        typeof: Number,
        require: true
    }
})

//获取图片数组
const images = ref([]);
//底部索引状态
const currentSlide = ref(0);
//加载状态
const loading = ref(false);
//错误状态
const errorMsg = ref(null);

//获取方法
const fetchImages = async (getUrl) => {
    try {
        loading.value = true;
        const response = await fetch(`${getUrl}?page=${props.page}&limit=${props.limit}`);
        const data = await response.json();
        console.log(data);
        if (data) {
            images.value = data;
            loading.value = false
        }
    } catch (e) {
        errorMsg.value = e.massage;
        loading.value = false;
    }
}

//左点击切换图片
const handlePrevious=()=>{
    currentSlide.value===0?currentSlide.value=images.length-1:currentSlide.value=currentSlide.value-1
    console.log(currentSlide.value);
    
}

//右点击切换图片
const handleNext=()=>{
    currentSlide.value===images.value.length-1?currentSlide.value=0:currentSlide.value=currentSlide.value+1
    console.log(currentSlide.value);
}

onMounted(() => {
    props.url !== '' ? fetchImages(props.url) : null
})


</script>

<style lang="scss" scoped>
.container{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 600px;
    height: 450px;
}

.current-image{
    border-radius: 0.5rem;
    box-shadow: 0 0 7px #666;
    width: 100%;
    height: 100%;
}

.hide-current-image{
    display: none;
}

.arrow{
    position: absolute;
    widows: 2rem;
    height: 2rem;
    color: #fff;
    filter: drop-shadow(0 0 5px #555);
}

.arrow-left{
    left: 1rem;
}

.arrow-right{
    right: 1rem;
}

.circle-indicators{
    display: flex;
    position: absolute;
    bottom: 2rem
}

.current-indicator{
    background-color: #fff;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    border: none;
    outline: none;
    margin: 0 0.2rem;
    cursor: pointer;
}

.inactive-indicator{
    background-color: gray;
}
</style>