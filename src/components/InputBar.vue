<template>
    <div id="InputBar">
        <span>
            <input type="text" class="inputText" v-model="inputText" @keydown.enter="handleClickAdd">
            <input type="button" value="Add" class="inputButton" @click="handleClickAdd">
        </span>
    </div>
</template>

<script>

export default {
    name:"InputBar",
    data:()=>{
        return {
            inputText:""
        }
    },
    methods:{
        handleClickAdd:function(){
            this.$emit("push",this.inputText);
            this.inputText = "";
        }
    }
}
</script>

<!--
<style>
    .inputText {
        width: 50%;
        margin-right: 3px;
    }

    #inputButton {
        width: 5%;
    }
</style>

-->