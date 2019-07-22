<template>
    <div id="Body">
       <InputBar @push="onPushTodoItem"></InputBar>
       <ListContainerv></ListContainerv>
    </div>
</template>

<script>
// import { resolve } from 'dns';

import InputBar from "./InputBar.vue";
import ListContainer from "./ListContainer.vue";
export default {
    name:"Body",
    // data:function(){
    //     return
    // },
    // methods:{}
    components: {
        InputBar,
        ListContainer
    },
    props:{
        list:{
            type:Array,
            default : () => []  //default是引用类型，必须加一个方法返回
        }
    },
    methods:{
        onPushTodoItem(payload){
            this.$emit("push",payload);
        }
    }

}
</script>
