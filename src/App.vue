<template>
  <div id="app">
    <h1>Profit First Calculator</h1>

    <h2>Income</h2>
    <input type="text" v-model="income">

    <OutcomeComponent title="Operating Expenses" percentage=".55" v-bind:income="income"/>
    <OutcomeComponent title="Owners Pay" percentage=".25" v-bind:income="income"/>
    <OutcomeComponent title="Taxes" percentage=".15" v-bind:income="income"/>
    <OutcomeComponent title="Profit" percentage=".05" v-bind:income="income"/>
  </div>
</template>

<script>
import OutcomeComponent from "./components/OutcomeComponent";
export default {
  name: "app",
  data: function() {
    return {
      income: 0
    };
  },
  components: { OutcomeComponent }
};
</script>

<style>
</style>
