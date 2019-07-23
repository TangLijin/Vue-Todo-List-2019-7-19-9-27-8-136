<template>
    <div id="Body">
       <InputBar @push="PushTodoItem"></InputBar>
       <ListContainer :todolist="todolist" :filterTodolistItem="filterTodolistItem"></ListContainer>
    </div>
</template>

<script>
// import { resolve } from 'dns';


let id = 0;
const getId = () => {
  return id++;
}

import InputBar from "./InputBar.vue";
import ListContainer from "./ListContainer.vue";

export default {
    name:"Body",
    // data:function(){
    //     return
    // },
    // methods:{}
    data: function(){
        return {
            todolist: [],
        }
    },
    components: {
        InputBar,
        ListContainer
    },
    props:{
        // list:{
        //     type:Array,
        //     default : () => []  //default是引用类型，必须加一个方法返回
        // }
        filterTodolistItem:Function
    },
    methods:{
        PushTodoItem:function(value){
            const item = {
                value:value,
                checked:false,
                id:getId()
            };
            this.todolist.push(item);
        }
    }

}
</script>
