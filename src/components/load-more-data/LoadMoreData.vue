<template>
    <div v-if="loading">
        <h1>Loading Data ! Please wait...</h1>
    </div>
    <div v-else class="load-more-container">
        <div class="product-container">
            <div class="product" v-for="item in products" :key="item.id">
                <img :src="item.thumbnail">
                <p>{{ item.title }}</p>
            </div>
        </div>
        <div class="button-container">
            <button @click="addCount" :disabled="disableButton">Load More Products</button>
            <p v-if="disableButton">You have reached to 100 products</p>
        </div>
    </div>
</template>

<script setup>
import { nextTick, onMounted, ref, watch, watchEffect } from 'vue';

//数据源API：https://dummyjson.com/products?limit=20&skip=10
//limit表示最多返回x个
//skip表示跳过y个产品，从y+1开始返回产品

//创建一个响应式空数组，存储图片
const products = ref([]);
//创建一个响应式布尔值，加载状态
const loading = ref(false);
//创建一个响应式数值，图片索引
const count = ref(0);
//创建一个响应式布尔值，加载按钮禁用
const disableButton = ref(false);
const lastScrollPosition = ref(0)
const fetchProducts = async () => {
    try {
        loading.value = true;
        const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count.value * 20}`)
        const data = await response.json();
        console.log(data);
        if (data && data.products && data.products.length) {
            products.value.push(...data.products);
            loading.value = false;
        }
    }
    catch (e) {
        console.log(e);
        loading.value = false;
    } finally {
        loading.value = false;
    }
}

// 点击加载更多按钮时调用此函数
const addCount = () => {
    lastScrollPosition.value = window.scrollY;
    count.value = count.value + 1;
}

// 在组件挂载时，首次获取产品数据
onMounted(() => {
    fetchProducts();
})

// 监听count的变化，当count值改变时再次获取产品数据
watchEffect(() => {
    if (count.value > 0) {
        fetchProducts();
    }
})

// 监听products数组的变化，当产品数量达到100时禁用按钮
watchEffect(() => {
    if (products.value.length === 100) {
        disableButton.value = true;
    }
})

// 监听count的变化，并在加载完成后恢复滚动位置
watchEffect(() => {
    if (count.value > 0) {
            //延迟设置滚动位置，以确保产品加载完成
            setTimeout(() => {
                window.scrollTo({
                    top: lastScrollPosition.value+320,
                    behavior: 'smooth'
                })
            }, 500)
    }
})
</script>

<style lang="scss" scoped>
.load-more-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.product-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

.product {
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid;
    gap: 10px;
    text-align: center;
}

.product img {
    margin: 0 auto;
    width: 200px;
    height: 200px;
}


.button-container {
    margin: 20px auto;
}
</style>