import Vue from 'vue'
import App from './TodoList.vue'

import Vuex from 'vuex'
Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
    state: {
        // count: 8,
        // base: 2
    },
    getters: {
        // getCountWithSomethingCool: function() {
        //     return function() {
        //         return store.state.count - 1;
        //     }
        // }
    },
    mutations: {
        // increment(state) {
        //     state.base += 10;
        // }
    }
})

new Vue({
    render: h => h(App),
}).$mount('#app')