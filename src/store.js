import { createStore } from "vuex" 

const store = createStore({
   state: {
     status : false,
     username: '',
    
    },
   mutations:{
      auth_state(state,value) {
         state.status = value;
       },
 
   },
   actions:{

    },

    getters:{  
    
     },
   
   
})

export default store;