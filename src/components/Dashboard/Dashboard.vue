// Dyanamic Component to handle the pumps

<template>
  <section>
    <h1>
      Welcome
    </h1>
    <Pump/>

  </section>

</template>

<script>
import Pump from './Pump.vue'

export default {
  name: 'Dashboard',
  components: {
    Pump
  }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap');

h1{
  text-align:right;
  color:#286e00;
  font-weight: 900;
   margin: 20px;
   font-size: 30px;
   border-bottom: 1px solid #286e00;
   font-family: 'Berkshire Swash', cursive;
}
.about{
     display:flex;
     justify-content: space-evenly;
     margin: 50px 0px;
   padding:0px 10px;
}
.get-started{
  width:500px;
  margin: 50px auto;
   padding:0px 10px;
}
.get-started p{
  text-align: center;
}
 .getstarted-image{
   width:100%;
 }
.get-started button{
  padding:20px ;
  border-radius:20px;
  background-color: #286e00;
  color:white;
  border:none;
  font-size: 18px;
}
.get-started button a{
  color:white;
  text-decoration: none;
}
.about-image{
  height:300px; 
}

/* responsiveness */
 @media screen and (max-width: 500px){
   .about{
     display:block;
   }
 .getstarted-image, .about-image{
   width:100%;
 }
    .get-started{
      width:80%;
      margin: 30px auto;;
   padding:0px 10px;
}


 } 

</style>
