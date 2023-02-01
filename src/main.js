import Vue from 'vue'
import App from './App.vue'
import bootstrap from './bootstrap'
import store from './store'


Vue.config.productionTip = false

Vue.use(bootstrap)




new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
