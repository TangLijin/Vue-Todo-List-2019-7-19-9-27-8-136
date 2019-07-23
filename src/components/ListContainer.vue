<template>
    <div id="ListContainer">
        <ol class="todoList">
            <li v-for="item in showFilteredTodoList" v-bind:key="item.id">
                <todo-list-item   
                :listItem="item"
                @handle-select="handleSelectOperator"
                @update-task-name="updateName">
                </todo-list-item>
            </li>
        </ol>  
    </div>
</template>

<script>
import TodoListItem from "./TodoListItem.vue";
export default {
    name:"ListContainer",
    // data:function(){
    //     return
    // },
    // methods:{}
    props:{
        todolist:{
            type:Array,
            default:()=>[]
        },
        filterTodolistItem:Function
    },
    components: {
        TodoListItem
    },
    data(){
        return {
            showFilteredTodoList: this.todolist
        }
    },
    watch: {
        todolist: function() {
            this.showFilteredTodoListItem();
        },
        filterTodolistItem: function() {
            this.showFilteredTodoListItem();
        }
    },
    methods:{
        showFilteredTodoListItem: function() {
            this.showFilteredTodoList = this.filterTodolistItem(this.todolist);
        },
        handleSelectOperator: function(checked, itemIndex) {
            this.todolist.filter(item => item.id === itemIndex)[0].checked = checked;
        },
        updateName: function(changedName, itemIndex) {
            this.todolist.filter(item => item.id === itemIndex)[0].value = changedName;
        }
    }
}
</script>
