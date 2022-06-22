import Vue from 'nativescript-vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        drawerState: false
    },
    mutations: {
        toggleSwitchMenu(state, value) {

            state.drawerState = value


        }
    }
})