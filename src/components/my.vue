<template>
  <div>
    <div>
      {{ name }} {{ name2 }} {{ number }}
    </div>
    <div>
      <mu-button v-on:click="increment" class="but" color="blue">Inc</mu-button>
    </div>
    <div>
      <mu-button v-on:click="decrement" class="but" color="blue">Dec</mu-button>
    </div>
    <MyChildComp cnt="100"/>
  </div>
</template>

<script>
var f = () => {
	return [...Array(10).keys()].reduce((a, b) => a + b);
};
var MyChildComp = {
	name: "MyChildComp",
	data() {
		return {
			mydata: "Yhjung"
		};
	},
	template: "<div>{{mydata}} {{cnt}}</div>",
	props: ["cnt"]
};

export default {
	name: "my",
	data() {
		return {
			name: (() => {
				return [...Array(10).keys()].reduce((a, b) => a + b);
			})(),
			name2: f(),
			number: 0
		};
	},
	methods: {
		increment: function() {
			// 인스턴스 내부의 데이터모델에 접근 할 땐,
			// this 를 사용한다
			this.number++;
		},
		decrement: function() {
			this.number--;
		}
	},
	components: { MyChildComp }
};
</script>

<style scoped>
div {
	font-family: "monospace";
	font-size: 30px;
}
.but {
	width: 300px;
	text-transform: none;
}
</style>
