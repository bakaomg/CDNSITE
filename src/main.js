import Vue from 'vue'
import App from './App.vue'
import dayjs from "dayjs";
import pangu from "pangu";

Vue.config.productionTip = false

Vue.prototype.$dayjs = dayjs;
Vue.prototype.$pangu = pangu;

new Vue({
  render: h => h(App)
}).$mount('#CDNSITE')

if (process.env.NODE_ENV === 'production') {
  console.clear();
  console.log(
    '\n %c \u2728 O\'s CDNSITE %c https://ohmyga.cn/ \n',
    'color: #ffffff; background: rgba(30, 136, 229, 1); padding:5px 0;',
    'background:rgba(66, 66, 66, 0.85); padding:5px 0;'
  )
}
