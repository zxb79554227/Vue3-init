<template>
    <div class="MainPage-header flex flex-row  px-32 py-3 justify-between shadow-md font-normal">
        <div class='left flex-col'>
            <div class=' text-lg leading-10'>首页</div>
        </div>
        <div class='left flex-col leading-10 cursor-pointer text-blue-900 font-bold'>
            <span v-for="i in navBar" :key="i.path" class=" mx-5 hover:text-blue-600  duration-200" >
                {{i.title}}
            </span>
        </div>
    </div>
</template>

<script lang='ts'>

const routes = [
    {
        title:'首页',
        path:'/Home',
    },
    {
        title:'解决方案',
        icon:'down',
        path:'/Solution',
        type:'dropDown'
    },
    {
        title:'区块链培训',
        path:'/Train'
    },
    {
        title:'关于我们',
        path:'/About'
    }
]
import { defineComponent, reactive } from "vue";
export default defineComponent({
    setup(){
        const navBar = reactive(routes)
        return{
            navBar
        }
    }
})
</script>
