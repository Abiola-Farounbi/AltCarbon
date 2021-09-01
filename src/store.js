import { createStore } from "vuex" 

const store = createStore({
   state: {
      user: {}
    },
   mutations:{
      
   },
   getters:{  
    isLoggedIn(){ 
       return false
      },
   },
   actions:{
    login(){
        
    }
   }
   
})

export default store;