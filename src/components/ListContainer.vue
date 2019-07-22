<template>
    <div id="ListContainer">
        
    </div>
</template>

<script>

export default {
    name:"ListContainer",
    // data:function(){
    //     return
    // },
    // methods:{}
    props:{
        list:{
            type:Array,
            default:()=>[]
        }
    }
}
</script>
