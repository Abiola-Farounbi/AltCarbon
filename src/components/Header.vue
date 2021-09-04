<template>
  <header>
      <div class='nav-logo'> <img  class='logo' alt="logo" src="../assets/icon.png"> </div>
      <div class='nav-items'>
      <router-link to="/">Home </router-link> 
        <router-link to="/dashboard"> Dashboard </router-link> 
      </div>
  </header>

</template>

<script>


export default {
  name: 'Header',
 
   
 
}
</script>

<style scoped>
 header{
      background-color: #286e00;
     display: flex;
     justify-content: space-between;
     padding:0px 40px;
     color:white ;
    text-decoration: none;
    font-size:18px;
  cursor: pointer;
  font-weight:bold;
 }
  .nav-items{
    margin:30px 0px;
   }

 header a{
     color:#286e00 ;
    text-decoration: none;
   background-color: white;
   border-radius: 10px;
   padding:10px;
    font-size:18px;
  cursor: pointer;
  font-weight:bold;
  margin-right:10px;
 }

 header a:hover{
  transform: scaleY(1.5);
 }
 .logo{
   width:100px;
 }

 /* responsiveness */
 @media screen and (max-width: 500px){
   header{
     display:block;
   }
   .nav-items{
     padding-bottom: 20px;
   }
   .nav-logo{
     text-align: center;
   }

 } 

</style>
