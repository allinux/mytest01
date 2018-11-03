<template>
  <div>
    <div>
      {{ name }} {{ name2 }}
    </div>
    <div>
      <mu-button v-on:click="javascript:alert('aaaa')" class="but" color="blue">One</mu-button>
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
      name2: f()
    };
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
