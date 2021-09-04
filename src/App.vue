<template>
 <main>
    <Header></Header>
   <section>
     <router-view/>
   </section>
   <Footer></Footer>
 </main>
</template>

<script>

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: 'App',
  components: {
   Header,
   Footer
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

*{
  margin:0px;
  padding:0px;
  font-family: 'Roboto', sans-serif;
}
</style>
