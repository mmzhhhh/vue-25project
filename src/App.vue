<template>
  <div>
    <!-- <Accordian/> -->
    <!-- <RandomColor/> -->
    <!-- <StarRating/> -->
    <ImageSlider url='https://picsum.photos/v2/list' page='1' limit='5'/>
  </div>
</template>

<script setup>
import Accordian from './components/accordian/Accordian.vue';
import ImageSlider from './components/image-slider/ImageSlider.vue';
import RandomColor from './components/random-color/RandomColor.vue';
import StarRating from './components/star-rating/StarRating.vue';
</script>

<style lang="scss" scoped>

</style>