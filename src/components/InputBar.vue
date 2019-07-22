<template>
    <div id="InputBar">
        <span>
            <input type="text" class="inputText" v-model="value" @keydown.enter="handleClickAdd">
            <input type="button" value="Add" id="inputButton" @click="handleClickAdd">
        </span>
    </div>
</template>

<script>

export default {
    name:"InputBar",
    data:()=>{
        return {
            value:""
        }
    },
    methods:{
        handleClickAdd(){
            this.$emit("push",this.value);
        }
    }
}
</script>

<style>
    .inputText {
        width: 50%;
        margin-right: 3px;
    }

    #inputButton {
        width: 5%;
    }
</style>

