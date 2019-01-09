<template>
  <div>
    <h2>{{title}}</h2>
    <p>${{ output }}</p>
  </div>
</template>

<script>
export default {
  name: "outcome",
  props: ["title", "percentage", "income"],
  computed: {
    output: function() {
      return (this.income * this.percentage).toFixed(2);
    }
  }
};
</script>