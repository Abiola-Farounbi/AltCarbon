<template>
  <section>
    <div class="pump">
        hismsm
    </div>
    <div class="pump">
        hismsm
    </div>
    <div class="pump">
        hismsm
    </div>

  </section>

</template>

<script>
import axios from 'axios'

export default {
  name: 'Pump',

  data() {
    return {
      pump1: '',
      pump2: '',
      pump3: '',
    }
  },
  async mounted() {
      const pump1 = axios.get("http://altcarbon.herokuapp.com/api/pump1/")
      const pump2 = axios.get("http://altcarbon.herokuapp.com/api/pump2/")
      const pump3 = axios.get("http://altcarbon.herokuapp.com/api/pump3/")
      const response = await Promise.all([pump1,pump2,pump3]);

      console.log(response[0].data)
  }

}
</script>

<style scoped>
section{
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap:3em;
  margin:30px 50px;
}
.pump{
    height:300px;
    border-radius: 20px;
     box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
                0 2px 4px rgba(0,0,0,0.07), 
                0 4px 8px rgba(0,0,0,0.07), 
                0 8px 16px rgba(0,0,0,0.07),
                0 16px 32px rgba(0,0,0,0.07), 
                0 32px 64px rgba(0,0,0,0.07);
}
 @media screen and (max-width: 500px){
  section{
  display:block;
  }
  .pump{
    margin: 30px 0px;
  }
}

</style>
