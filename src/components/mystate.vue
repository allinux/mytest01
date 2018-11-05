<template>
    <div>
        Parent counter : {{ this.$store.state.counter }} 11<br>
        <button @click="addCounter">+</button>
        <button @click="subCounter">-</button>

        <!-- Child 컴포넌트를 등록하고 counter 데이터 속성을 props 로 전달한다. -->
        <!-- <child v-bind:passedCounter="counter"></child> -->
        <child></child>
    </div>
</template>

<script>
const Child = {
	template: `
    <div>
        <hr>
        Child counter : {{ this.$store.state.counter }} <br>
        <button>+</button>
        <button>-</button>
    </div>
    `
	//props: ["passedCounter"]
};

export default {
	data() {
		return {
			// data 속성 등록
			counter: 0
		};
	},
	methods: {
		// 이벤트 추가
		addCounter() {
			this.$store.state.counter = this.$store.state.counter + 1;
		},
		subCounter() {
			this.$store.state.counter--;
		}
	},
	components: {
		// Child 컴포넌트를 하위 컴포넌트로 등록
		child: Child
	}
};
</script>

<style scoped>
</style>