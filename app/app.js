import Vue from 'nativescript-vue'
import App from './components/App'
import Navigator from 'nativescript-vue-navigator'
import { routes } from './routes'
import MultiDrawer from 'nativescript-vue-multi-drawer'
import store from './store/index'
//import DateTimePicker from '@nativescript/datetimepicker/vue';
//Vue.use(DateTimePicker);
Vue.config.silent = true;
Vue.use(Navigator, { routes })
Vue.use(MultiDrawer)
Vue.registerElement('PDFView', () => require('@finanzritter/nativescript-pdf-view').PDFView)
Vue.registerElement("DropDown", () => require("nativescript-drop-down/drop-down").DropDown);
Vue.registerElement("VideoPlayer", () => require("nativescript-videoplayer").Video);
Vue.registerElement('ImageCacheIt', () => require('@triniwiz/nativescript-image-cache-it').ImageCacheIt);
Vue.registerElement('DateTimePicker', () => require('@nativescript/datetimepicker/vue').DateTimePicker);
// Vue.registerElement("VideoPlayer", () => require("@nstudio/nativescript-exoplayer").Video);
// ns resources generate splashes App_Resources/iOS/Assets.xcassets/LaunchScreen.Center.imageset/LaunchScreen-Center.png --background "#000000"

  
new Vue({
  render: h => h(App),
  store: store
}).$start()
