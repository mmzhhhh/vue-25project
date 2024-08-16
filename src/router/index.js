import { createRouter,createWebHistory } from 'vue-router';
import TabContent1 from '../components/custom-tabs/TabContent1.vue';
import TabContent2 from '../components/custom-tabs/TabContent2.vue';
import TabContent3 from '../components/custom-tabs/TabContent3.vue';

const routes=[
    {path:'/tab1',component:TabContent1},
    {path:'/tab2',component:TabContent2},
    {path:'/tab3',component:TabContent3}
]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router