<template>
  <section>
    <h1>
      Alt Carbon
    </h1>

    <div class="about">

     <div>
       <img class='about-image' src="../assets/about.jpg" alt='green environment' aos-delay='1000' 
     data-aos-easing="ease" data-aos="zoom-in">

     </div>
     <div>
       Alt carbon's idea is revolutionary
     </div>
    </div>

    <div class="get-started">
       <img class='getstarted-image' src="../assets/getStarted.png" alt='green environment'
        aos-delay='1000'  data-aos-easing="ease" data-aos="zoom-in">

       <p>
        <button>
        <router-link to="/login"> Get Started </router-link>
     </button>
       </p>
    </div>
  </section>

</template>

<script>


export default {
  name: 'Home',

}
</script>

<style scoped>
h1{
  text-align:center;
  color:#286e00;
  font-weight: 900;
   margin: 20px 0px;
   font-size: 30px;
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
