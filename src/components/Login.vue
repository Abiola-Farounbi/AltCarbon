<template>
 <div class='loginForm'>
   <h1>Sign in</h1>
   <form class="login" @submit.prevent="login">
     
     <div>
       <label>Email</label>
     <input required v-model="email" type="email" placeholder="Name"/>
     </div>
     <div>
       <label>Password</label>
       <input required v-model="password" type="password" placeholder="Password"/>
     </div>
     
     <div style='text-align:center'>
       <button type="submit">Login</button>
     </div>
   </form>
 </div>
</template>

<script>
export default {
    name: 'Login',
    components: {
      
    },
    data(){
      return {
        userData:{
          email : "",
          password : ""
        }
      }
    },
     methods: {
      login: function () {
        this.$store.dispatch('login', this.userData)
       .then(() => this.$router.push('/'))
       .catch(err => console.log(err))
      }
    },
    
  }
  </script>
  
  <style>
  .loginForm{
      width:500px;
      margin:50px auto;
      box-shadow: 2px 2px 4px grey;
      padding:50px;
  }

  h1{
  text-align:center;
  color:#286e00;
  font-weight: 900;
   margin: 20px 0px;
   font-size: 30px;
}
.loginForm input{
  width:100%;
  padding:10px;
  border-radius:10px;
  border:2px solid #286e00;
  margin:10xp 0px;
}


.loginForm button{

  padding:20px;
  border-radius:10px;
  background-color: #286e00;
  border: none;
  color:white;

}

.loginForm div{
  margin:20px 0px;
}


/* responsiveness */
 @media screen and (max-width: 500px){
  .loginForm{
      width:180px;
      padding:50px;
  }


 } 
  
  </style>