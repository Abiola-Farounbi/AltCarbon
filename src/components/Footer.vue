<template>
  <footer>
      <div class='nav-logo'> <img  class='logo' alt="logo" src="../assets/icon.png"> </div>
      <div class='nav-items'>
      <router-link to="/">Home</router-link> 
      <p> Copyright © 2021 </p>
      <p> Devloped by Team AltCarbon </p>
      </div>
  </footer>

</template>

<script>


export default {
  name: 'Footer',
  computed : {
      isLoggedIn() { return this.$store.getters.isLoggedIn}
    },
    methods: {
      logout() {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/')
        })
      }
    }
 
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
  font-weight:bold;
 }
  .nav-items{
    margin:30px 0px;
    display:block;
   }
   .nav-items p{
     margin:10px 0px;
   }

 footer a{
    color:white ;
    text-decoration: none;
    font-size:18px;
  cursor: pointer;
  font-weight:bold;
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
   }
   .nav-logo{
     text-align: center;
   }

 } 

</style>
