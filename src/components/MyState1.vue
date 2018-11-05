<template>
	<div>
		Parent counter : {{ parentCounter }} 11<br>
		<button @click="addCounter">+</button>
		<button @click="subCounter">-</button>

		<child></child>
	</div>
</template>

<script>
import { mapGetters } from "vuex";

const Child = {
	template: `
    <div>
        <hr>
        Child counter : {{ childCounter }} <br>
        <button>+</button>
        <button>-</button>
    </div>
	`,
	computed: {
		...mapGetters({
			childCounter: "getCounter"
		})
	}
	//props: ["passedCounter"]
};

export default {
	methods: {
		//
		addCounter() {
			this.$store.commit("addCounter");
		},
		subCounter() {
			this.$store.commit("decCounter");
		}
	},
	computed: {
		...mapGetters({
			parentCounter: "getCounter"
		})
	},
	components: {
		child: Child
	}
};
</script>

<style scoped>
</style>
