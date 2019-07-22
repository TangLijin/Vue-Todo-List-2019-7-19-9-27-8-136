<template>
    <div id="Body">
       <InputBar></InputBar>
       <ListContainer></ListContainer>
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
    }
}
</script>
