<template>
  <div>
    <FirstPage v-bind:data="message"></FirstPage>
  </div>
</template>

<script>
import FirstPage from "./components/firstPage.vue";

export default {
  name: "App",
  components: {
    FirstPage,
  },
  data: function () {
    return {
      message: "jemin",
    };
  },
};
</script>

<style></style>
