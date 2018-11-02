<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
    <HelloWorld cccc="2222fgf"/>
    <my/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import my from "./components/my";

export default {
  name: "App2",
  components: {
    HelloWorld,
    my
  }
};
</script>

<style>
#app {
  font-family: cursive, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
