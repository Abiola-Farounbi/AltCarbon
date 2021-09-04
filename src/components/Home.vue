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
     <div class='about-text'>
         Alt Carbon is an advanced technology for building a sustainable energy future.
         <br>
         We leverage signal processing and artificial intelligence to deliver cutting edge solutions that help to solve modern-day industry challenges.
         <br>
         Alt Carbon aims to cut down emissions from energy plants that result from machine Inefficiency which inherently saves more energy and reduces operational downtime.
     </div>
    </div>

    <div class="get-started">
       <img class='getstarted-image' src="../assets/getStarted.png" alt='green environment'
        aos-delay='1000'  data-aos-easing="ease" data-aos="zoom-in">
        <p class='get-started-text'>
          Start the process easily 
        </p>
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
@import url('https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap');

h1{
  text-align:right;
  border-bottom: 1px solid #286e00;
  color:#286e00;
  font-weight: 900;
   margin: 20px ;
   font-size: 30px;
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
.get-started-text{
  font-size:20px;
  font-weight:900;
  margin-bottom: 20px;
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
.about-text{
  width:50%;
  line-height: 35px;

}

/* responsiveness */
 @media screen and (max-width: 500px){
   .about{
     display:block;
   }
   .about-text{
  width:100%;

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
