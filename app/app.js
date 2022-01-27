import Vue from 'nativescript-vue'
import App from './components/App'
import Navigator from 'nativescript-vue-navigator'
import {routes} from './routes'

import MultiDrawer from 'nativescript-vue-multi-drawer'


Vue.use(Navigator, { routes })
Vue.use(MultiDrawer)
// ns resources generate splashes App_Resources/iOS/Assets.xcassets/LaunchScreen.Center.imageset/LaunchScreen-Center.png --background "#000000"

new Vue({
  render: h => h(App),
}).$start()
