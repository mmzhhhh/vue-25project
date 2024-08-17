<template>
    <div :id="id || 'Modal'" class="modal">
        <div :class="['modal-content',isExiting?'modal-exit':'modal-enter']">
            <div class="header">
                <span class="close-modal-icon" @click="handleClose">&times;</span>
                <h2>{{ props.header||"Header" }}</h2>
            </div>
            <div class="body">
                {{ props.body||"This is our MOdal Body"}}
            </div>
            <div class="footer">
                <h2>{{ props.footer||"footer"}}</h2>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
    id: {
        type: String,
    },
    header: {
        type: String,
    },
    body: {
        type: String,
    },
    footer: {
        type: String,
    },
    onClose:{
        type:Function,
    }
})

const isExiting=ref(false);

const handleClose=()=>{
    isExiting.value=true;
    console.log(isExiting);
    
}

watch(isExiting,(newValue)=>{
    if(newValue){
        setTimeout(()=>{
            props.onClose();
        },500)
    }
});
</script>

<style lang="scss" scoped>
.modal{
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: #baf005;
}

.modal-content{
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    border: 1px solid red;
    width: 80%;
    animation-duration: .5s;
    animation-timing-function: ease-out;
}

.modal-enter {
  animation-name: animateModal;
}

.modal-exit {
  animation-name: exitModal;
}

.close-modal-icon{
    float: right;
    cursor: pointer;
    font-size: 40px;
    font-weight: bold;
}

.header{
    padding: 4px 16px;
    background-color: #5cb85c;
    color: #fff;
}

.body{
    padding: 2px 16px;
    height: 200px;
}

.footer{
    padding: 2px 16px;
    background-color: #5cb85c;
    color: #fff;
}

@keyframes animateModal{
    from {
        transform: translateY(-200px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes exitModal{
    from {
        transform: translateY(0);
        opacity: 1;
    }
    to {
        transform: translateY(-200px);
        opacity: 0;
    }
}
</style>