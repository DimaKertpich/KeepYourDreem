<template>
    <div>
      <dv-menu></dv-menu>
      <dv-header></dv-header>
      <dv-traning></dv-traning>
    </div>
</template>

<script>

import menu from './components/top/menu.vue'
import header from './components/top/header.vue'
import traning from './components/Content/typeTraning.vue'

export default {
  name: 'App',
  components: {
    'dv-menu' : menu,
    'dv-header' : header,
    'dv-traning' : traning
  }
}
</script>

<style>

@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
@import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

</style>
