<template>
  <div id="app">
    <Header></Header>
    <router-view />
  </div>
</template>
<script>
import Header from "./views/Header";

export default {
  name: "app",
  components: { Header },
  data() {
    return {
      navigation: null,
    };
  },
};
</script>

<style lang="scss"></style>
