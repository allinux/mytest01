<template>
  <div>
    <div>
      {{ name }} {{ name2 }}
    </div>
    <div>
      <mu-button class="but" color="blue">One</mu-button>
    </div>
  </div>
</template>

<script>
var f = () => {
  return [...Array(10).keys()].reduce((a, b) => a + b);
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
  }
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
