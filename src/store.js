import { createStore } from "vuex" 
import axios from 'axios'

const store = createStore({
   state: {
      user: false,
    },
   mutations:{
      auth_state(state) {
         state.user = false;
       },
   },
   getters:{  
    isLoggedIn(state){ 
         return state.user;
      },
   },
   actions:{
    login({commit}, payload){
         axios.post("https://altcarbon.herokuapp.com/auth/login/", payload)
           .then(res => {
               commit('auth_state', true)
                console.log(res.data)
           })
           .catch(err => {
             console.log(err.message)
           })
   
    },
    logout({commit}) {
         commit('auth_state', false) 
      }
    }
   
   
})

export default store;