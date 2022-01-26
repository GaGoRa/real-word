import Vue from 'nativescript-vue'
import App from './components/App'
import Navigator from 'nativescript-vue-navigator'
import {routes} from './routes'

import MultiDrawer from 'nativescript-vue-multi-drawer'


Vue.use(Navigator, { routes })
Vue.use(MultiDrawer)

new Vue({
  render: h => h(App),
}).$start()
