<template>
    <div class="MainPage">
        <main-header></main-header>
        <div class="content">
            
        </div>
        <main-footer></main-footer>
    </div>
</template>

<script lang='ts'>
import { defineAsyncComponent, defineComponent } from "vue";

export default defineComponent({
    components:{
        'main-header':defineAsyncComponent(()=>import('./Header.vue')),
        'main-footer':defineAsyncComponent(()=>import('./Footer.vue'))
    }
})
</script>
