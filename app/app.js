import Vue from 'nativescript-vue'
import App from './components/App'
import Navigator from 'nativescript-vue-navigator'
import {routes} from './routes'
import MultiDrawer from 'nativescript-vue-multi-drawer'
//import NSVueShadow from 'nativescript-vue-shadow'


Vue.use(Navigator, { routes })
Vue.use(MultiDrawer)
//Vue.use(NSVueShadow)
Vue.registerElement("DropDown", () => require("nativescript-drop-down/drop-down").DropDown);

// ns resources generate splashes App_Resources/iOS/Assets.xcassets/LaunchScreen.Center.imageset/LaunchScreen-Center.png --background "#000000"

new Vue({
  render: h => h(App),
}).$start()
