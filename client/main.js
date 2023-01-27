import Vue from 'vue'

import '../imports/ui/plugins'

import router from '../imports/ui/router';
import App from '../imports/ui/App.vue'

Meteor.startup(() => {
  new Vue({
    router,
    el: '#app',
    ...App,
  })
})
