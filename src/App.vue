<template>
 <main>
    <Header></Header>
   <section>
     <router-view/>
   </section>
 </main>
</template>

<script>

import Header from "./components/Header.vue";


export default {
  name: 'App',
  components: {
   Header,
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
