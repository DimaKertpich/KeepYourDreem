<template>
    <div>
      <dv-menu></dv-menu>
      <dv-header></dv-header>
      <dv-choice></dv-choice>

      <div class="line"></div>

      <dv-traning></dv-traning>

      <div class="line"></div>
      <dv-comment></dv-comment>
    </div>
</template>

<script>

import menu from './components/top/menu.vue'
import header from './components/top/header.vue'
import traning from './components/Content/aboutUs.vue'
import choice from './components/Content/choice.vue'
import comment from './components/Content/comment.vue'
import { WOW } from 'wowjs'

export default {
  name: 'App',
  components: {
    'dv-menu' : menu,
    'dv-header' : header,
    'dv-traning' : traning,
    'dv-choice' : choice,
    'dv-comment' : comment
  },

  mounted(){
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true
        })
        wow.init();
    }
}
</script>

<style>

@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
@import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

.line{
  width: 90%;
  height: 1px;
  background: #BDBDBD;
  opacity: .2;
  margin: 20px auto;
}

</style>
