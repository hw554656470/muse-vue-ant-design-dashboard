/*
=========================================================
Muse - Vue Ant Design Dashboard - v1.0.0
=========================================================

Product Page: https://www.creative-tim.com/product/vue-ant-design-dashboard
Copyright 2021 Creative Tim (https://www.creative-tim.com)
Coded by Creative Tim

=========================================================
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. 
*/

import Vue from 'vue'
import Antd, { message } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'
import router from './router'
import Layout from './layouts/Layout.vue';

// 组件
import Confirm from './components/Confirm/default.vue';
import PublicTab from './components/PublicTab.vue';

Vue.component('tag-name',{})


import './scss/app.scss';

Vue.use(Antd);

Vue.component('confirm', Confirm);
Vue.component('publictab',PublicTab)

// 快捷消息处理
message.config({
  top: `50%`,
  duration: 1,
});
Vue.prototype.$message = message;


Vue.config.productionTip = false



Vue.component("layout-default", Layout);

new Vue({
  router,
  message,
  render: h => h(App)
}).$mount('#app')