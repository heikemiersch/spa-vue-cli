<template>
  <div id="app">
    <section class="stars">
      <div id="stars1"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <img src="./assets/spacexlogo.jpg" />

      <home></home>
      <!-- <rockets></rockets> -->
    </section>
  </div>
</template>

<script>
import styles from "./stars.css";
export default {
  data() {
    return {};
  }
};
</script>

<style>
#app {
  /* background-color: rgb(14, 14, 56); */
  font-family: "Roboto", sans-serif;
  line-height: 1.6;
}
h1 {
  color: rgb(241, 235, 226);
}
</style>
