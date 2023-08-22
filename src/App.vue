<script setup>
import HelloWorld from './components/HelloWorld.vue'
import AppDetails from './pagine/AppDetails.vue';
import AppHome from './pagine/AppHome.vue';
import Header from './components/Header.vue';
</script>

<template>
  <div>
    <Header> </Header>
  </div>


  <router-view></router-view>
</template>

