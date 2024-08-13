<!-- npm install oh-vue-icons -->
<template>
    <div class="star-rating">
        <v-icon name="fa-star" scale="3" 
        v-for="star in noOfStar" 
        :class="star<=(hover||rating)?'active':'inactive'"
        :key="star"
        @click="handleClick(star)"
        @mouseenter="handleMouseEnter(star)"
        @mouseleave="handleMouseLeave(star)"></v-icon>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props=defineProps({
    noOfStar:{
        type:Number,
        default:6
    }
})

const hover=ref(0);
const rating=ref(0);

const handleClick=(getCurrentId)=>{
    rating.value=getCurrentId
}

const handleMouseEnter=(getCurrentId)=>{
    hover.value=getCurrentId
}

const handleMouseLeave=()=>{
    hover.value=rating.value
}


</script>

<style lang="scss" scoped>
.active{
    color: #fff000;
}

.inactive{
    color: #000;
}
</style>