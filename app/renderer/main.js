import Vue from 'vue'
import store from '@/renderer/store'

import App from '@/renderer/App'

new Vue({
    store,
    el: '#app',
    render: h => h(App)
})