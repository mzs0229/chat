import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueClipboard from 'vue-clipboard2'
import clipboard from 'clipboard';
import {Message} from 'element-ui'


Vue.prototype.clipboard = clipboard;
Vue.prototype.$message = Message
Vue.prototype.$http= axios
Vue.use(VueClipboard)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
