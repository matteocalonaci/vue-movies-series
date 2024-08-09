<script>
import The_Header from './components/The_Header.vue';
import The_Footer from './components/The_Footer.vue';

export default {
  name: "App",
  components: {
    The_Header,
    The_Footer
  },
  data() {
    return {
    }
  }
}
</script>

<template>
  <The_Header />
  <router-view />
  <The_Footer />
</template>

<style scoped></style>
