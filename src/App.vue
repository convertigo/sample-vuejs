<template>
  <div id="app">
     <img src="./assets/logo.png">
     <router-view class="view"></router-view>
  </div>
</template>

<style>
  body {
    font-family: Helvetica, sans-serif;
    text-align: center;
  }
  .router-link-active{
    color: red ;
  }
  .centered{
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

</style>


