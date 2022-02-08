import Vue from 'nativescript-vue'
import App from './components/App'
import Navigator from 'nativescript-vue-navigator'
import {routes} from './routes'
import { DropDown }  from "nativescript-drop-down";
import MultiDrawer from 'nativescript-vue-multi-drawer'


Vue.use(Navigator, { routes })
Vue.use(MultiDrawer)
Vue.registerElement("DropDown", () => require("nativescript-drop-down/drop-down").DropDown);

// ns resources generate splashes App_Resources/iOS/Assets.xcassets/LaunchScreen.Center.imageset/LaunchScreen-Center.png --background "#000000"

new Vue({
  render: h => h(App),
}).$start()
