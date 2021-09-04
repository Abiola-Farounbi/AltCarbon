<template>
  <footer>
      <div class='nav-logo'> <img  class='logo' alt="logo" src="../assets/icon.png"> </div>
      <div class='nav-items'>
      <p> Copyright © 2021 </p>
      <p> Developed by Team AltCarbon </p>
      </div>
  </footer>

</template>

<script>


export default {
  name: 'Footer',

 
}
</script>

<style scoped>
.logo{
  height:100px;
}
 footer{
      background-color: #286e00;
     display: flex;
     justify-content: space-between;
     padding:0px 40px;
     color:white ;
    text-decoration: none;
    font-size:18px;
  cursor: pointer;
 }
  .nav-items{
    margin:30px 0px;
    display:block;
   }
   .nav-items p{
     margin:20px 0px;
   }

 footer a{
    color:white ;
    text-decoration: none;
    font-size:18px;
  cursor: pointer;
  margin-right:10px;
 }
 .logo{
   width:100px;
 }

 /* responsiveness */
 @media screen and (max-width: 500px){
   footer{
     display:block;
   }
   .nav-items{
     padding-bottom: 20px;
     font-size:15px;
   }
   .nav-logo{
     text-align: center;
   }

 } 

</style>
