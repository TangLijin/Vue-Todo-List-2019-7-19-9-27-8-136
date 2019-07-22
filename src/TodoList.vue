<template>
  <div id="app">
    <Header></Header>
    <Body :list="list" @push = "onPushTodoItem"></Body>
    <Footer></Footer>
    
  </div>
</template>

<script>
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import { resolve } from 'dns';

let id = 0;
  const getId = () => {
    return id++;
  }

export default {
  name: 'app',
  // components: {
  //   HelloWorld
  // }
  
  components: {
    Header,
    Body,
    Footer
  },
  data: function(){
    return {
      list:[]
    }
  },
  props:{
    list:{
      type:Array,
      default:()=>[]
    }
  },
  methods: {
    onPushTodoItem(value){
      const item = {
        value,
        finished:false,
        id:getId()
      };
      
      this.list.push(item);
    }
  }

}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;



}
</style>
