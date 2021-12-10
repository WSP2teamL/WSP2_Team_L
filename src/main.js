import Vue from 'vue'
import App from './App.vue' //컴포넌트 파일 

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

