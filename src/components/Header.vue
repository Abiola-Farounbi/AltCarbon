<template>
  <header>
      <div class='nav-logo'> <img  class='logo' alt="logo" src="../assets/icon.png"> </div>
      <div class='nav-items'>
      <router-link to="/">Home</router-link> |
      <span  v-if="isLoggedIn"> | <a @click="logout">Logout</a></span>
      <span v-else> <router-link to="/login"> Login </router-link>  </span>
      </div>
  </header>

</template>

<script>


export default {
  name: 'Header',
  computed : {
      isLoggedIn() { 
        return this.$store.getters.isLoggedIn
        }
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
