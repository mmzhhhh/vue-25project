<template>
    <div class="wrapper">
        <div class="heading">
            <router-link to="/tab1" class="tab-item">Tab 1</router-link>
            <router-link to="/tab2" class="tab-item">Tab 2</router-link>
            <router-link to="/tab3" class="tab-item">Tab 3</router-link>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.wrapper{
    padding: 8px;
}

.heading{
    display: flex;
    justify-content: center;
    margin-bottom: 12px;
}

.tab-item{
    display: inline-flex;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    padding: 10px 15px;
    cursor: pointer;
    border: none;
    color: #fff;
    background:#4e016a ;
    transition: all .3s;
}

.tab-item.active{
    border-color: #000;
    background: #a1d600;
    color: #fff;
    transition: all .3s;
}

.content{
    padding: 20px 10px;
    height: 300px;
    overflow: auto;
    background-color: #fff;
}


</style>