import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
import 'wowjs/css/libs/animate.css'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faEye  } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'



import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEye, faEyeSlash, faCircleCheck, faUser, faAngleLeft, faAngleRight, faTrash, faTwitterSquare, faFacebook, faGooglePlusSquare, faLinkedin, faInstagramSquare, faAngleDown, faAngleUp);


Vue.component('font-awesome-icon', FontAwesomeIcon);

const firebaseConfig = {
  apiKey: 'AIzaSyBk0snYoAQooq3wRohNjX-sOdAWGQWDjIY',
  authDomain: 'kachalkadimona.firebaseapp.com',
  projectId: 'kachalkadimona',
  storageBucket: 'kachalkadimona.appspot.com',
  messagingSenderId: '833040501223',
  appId: '1:833040501223:web:b715a9d8e4f7bcb31bd542',
  measurementId: 'G-G12LLHF7GB'
};

firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
