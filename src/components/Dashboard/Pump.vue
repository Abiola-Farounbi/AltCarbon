<template>
  <section>


  



    <div class="pump" v-if=" pump1Val == '1' ">
      <img class='un-image'  src='../../assets/bell.gif' alt='a bell GIF'/>
        Pump 1 reading is Anomalous
    </div>
    <div class="pump" v-else-if="pump1Val == '0'">
       <img class='un-image'  src='../../assets/greenNotification.png' alt='a green notification'/>
      Pump 1 reading is Normal
    </div>
    <div class="pump" v-else>
      <img class='un-image'  src='../../assets/404.gif' alt='a 404 GIF'/>
      Unable to load reading
    </div>


      <div class="pump" v-if="pump2Val == '1'">
         <img class='un-image'  src='../../assets/bell.gif' alt='a bell GIF'/>
        Pump 2 reading is Anomalous
    </div>
    <div  class="pump" v-else-if="pump2Val == '0'">
       <img class='un-image'  src='../../assets/greenNotification.png' alt='a green notification'/>
      Pump 2 reading is Normal
    </div>
     <div class="pump" v-else>
      
      <img class='un-image'  src='../../assets/404.gif' alt='a 404 GIF'/>
      Unable to load readings
    </div>

      <div class="pump" v-if="pump3Val == '1'">
            <img class='un-image'  src='../../assets/bell.gif' alt='a bell GIF'/>
        Pump 3 reading is Anomalous
    </div>
    <div class="pump" v-else-if="pump3Val == '0'">
       <img class='un-image'  src='../../assets/greenNotification.png' alt='a green notification'/>
      Pump 3 reading is Normal
    </div>
    <div class="pump" v-else>
      <img class='un-image' src='../../assets/404.gif' alt='a 404 GIF'/>
      Unable to load readings
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
  computed:{
    pump1Val(){
      return this.pump1
    },
     pump2Val(){
      return this.pump2
    },
     pump3Val(){
      return this.pump3
    },
  
 
  },
  async mounted() {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/' 
  const apiUrl1 = 'http://altcarbon.herokuapp.com/api/pump1/';
  const apiUrl2 = 'http://altcarbon.herokuapp.com/api/pump2/';
  const apiUrl3 = 'http://altcarbon.herokuapp.com/api/pump3/';
 
  await axios.all([
  axios.get(proxyUrl + apiUrl1),
  axios.get(proxyUrl + apiUrl2),
  axios.get(proxyUrl + apiUrl3),
])
.then(responseArr => {
  
  this.pump1 =  responseArr[0].data.category;
  this.pump2 =  responseArr[1].data.category;
  this.pump3 =  responseArr[2].data.category;
})  
  .catch((error)  => { 
  console.log(error.message)
  })
    
      
  


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
    height:200px;
    border-radius: 20px;
     box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
                0 2px 4px rgba(0,0,0,0.07), 
                0 4px 8px rgba(0,0,0,0.07), 
                0 8px 16px rgba(0,0,0,0.07),
                0 16px 32px rgba(0,0,0,0.07), 
                0 32px 64px rgba(0,0,0,0.07);
    padding:20px ;
    text-align:center;
    font-size:20px;
    font-weight: bold;
}
.un-image{
  height: 150px;
display: block;
width: 100%;
margin-bottom: 10px;
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
