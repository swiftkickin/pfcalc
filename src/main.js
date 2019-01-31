import Vue from 'vue'
import App from './App.vue'

import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-28954757-7'
});

Vue.config.productionTip = false

Vue.filter('currency', function (value) {
  if (typeof value !== "number") {
    return value;
  }
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });
  return formatter.format(value);
})

new Vue({
  render: h => h(App),
}).$mount('#app')
