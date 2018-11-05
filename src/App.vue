<template>
    <div id="app">
        <img width="25%" src="logo.png">
        <HelloWorld cccc="2222fgf" />
        <my />

        <mystate />
    </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import my from "./components/my";
import mystate from "./components/mystate";

export default {
	name: "App2",
	components: {
		HelloWorld,
		my,
		mystate
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
