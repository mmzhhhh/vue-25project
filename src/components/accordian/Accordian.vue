<template>
    <div class="wrapper">
        <div class="accordian" v-if="data && data.length > 0">
            <!-- 按钮取反 -->
            <button @click="enableMultiSelection=!enableMultiSelection">Enable Multi Selection</button>
            <div class="item" v-for="dataItem in data" :key="dataItem.id">
                <!-- 标题 -->
                <div class="title" @click="enableMultiSelection?handleMultiSelection(dataItem.id):handleSingleSelection(dataItem.id)">
                    <h3>{{ dataItem.question }}</h3>
                    <span>+</span>
                    <!-- 展开细节 -->
                </div>
                <div v-if="enableMultiSelection && multiple.indexOf(dataItem.id)!==-1">
                    <p class="content">{{ dataItem.answer }}</p>
                </div>
                <div v-else-if="!enableMultiSelection && selected===dataItem.id">
                    <p class="content">{{ dataItem.answer }}</p>
                </div>
            </div>
        </div>
        <div v-else>
            <h1>Not Found</h1>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import rawData from './data';
//原始数据
const data = ref(rawData);

//单项细节折叠
const selected = ref(null);

//单、多项细节折叠
const enableMultiSelection = ref(false);

//多项细节数组
const multiple=ref([]);

const handleSingleSelection = (getCurrentId) => {
    selected.value = (selected.value === getCurrentId ? null : getCurrentId);
}

const handleMultiSelection=(getCurrentId)=>{
    let cpyMultiple=[...multiple.value]
    //获取点击数值是否存在
    const findIndexOfCurrentId=multiple.value.indexOf(getCurrentId);
    console.log(findIndexOfCurrentId); 
    if(findIndexOfCurrentId===-1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexOfCurrentId,1);
    multiple.value=cpyMultiple;
}


</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;

}

.accordian {
    width: 800px;
}

.item {
    background-color: #395f74;
    margin-bottom: 10px;
    padding: 10px 20px;
}

.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
}

.content {
    color: #fff;
    height: auto;
}

.wrapper button{
    padding: 10px 20px;
    background-color: #395f74;
    text-align: center;
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 20px auto;
    font-weight: bold;
    color: #fff;
}
</style>