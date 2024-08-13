<template>
    <li>
        <div class="menu-item">
            <p>{{ item.label }}</p>
            <span v-if="item&&item.children&&item.children.length" @click="toggleChildren">
                <v-icon name="fa-plus" v-if="!displayCurrentChildren[item.label]"/>
                <v-icon name="fa-minus" v-else />
            </span>
        </div>
        <MenuList v-if="item.children&&displayCurrentChildren[item.label]" :list="item.children"/>
    </li>
</template>

<script setup>
import { ref } from 'vue';
import MenuList from './MenuList.vue';


const props = defineProps({
    item: {
        type: Object,
        require: true,
    }
})

const displayCurrentChildren=ref([])

const toggleChildren=()=>{
    displayCurrentChildren.value={
        ...displayCurrentChildren.value,
        [props.item.label]:!displayCurrentChildren.value[props.item.label]
    }
}


</script>

<style lang="scss" scoped>
.menu-item {
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    color: #fff;
}
</style>