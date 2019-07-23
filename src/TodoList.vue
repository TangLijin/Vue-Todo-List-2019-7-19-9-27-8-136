<template>
  <div id="app">
    <div class="homePage">
      <Header></Header>
      <Body :filterTodolistItem="filterTodolistItem"></Body>
      <Footer @getChildStatus="getChildStatus"></Footer>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import { resolve } from 'dns';


export default {
  name: 'app',
  components: {
    Header,
    Body,
    Footer
  },
  data() {
    return {
      filterTodolistItem: (list) => list
    };
  },
  methods: {
    getChildStatus(filterTodolistItem){
        this.filterTodolistItem = filterTodolistItem;
    }

    
  }

}
</script>

<!--
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
-->