import { createStore } from "vuex" 
import axios from 'axios'

const store = createStore({
   state: {
     status : false,
     username: '',
    },
   mutations:{
      auth_state(state,value) {
         state.status = value;
       },
       auth_name(state,name){
        state.username = name;
       },
       logout(state) {
        state.status = false
      },
   },
   actions:{
    login({commit}, payload){
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/' 
      const apiUrl = 'https://altcarbon.herokuapp.com/auth/login/';
        

         axios.post(proxyUrl + apiUrl, payload)
           .then(res => {
               const username = res.data.username
               const value = true
               commit('auth_state', value)
               commit('auth_name', username)
                console.log(res.data.username)
           })
           .catch(err => {
             console.log(err.message)
             alert('Invalid login')
           })
   
    },
    logout({commit}) {
      commit('logout')
      }
    },

    getters:{  
      isLoggedIn(state){ 
           return state.status;   
        },
      isName(state){
         return state.username
      }
     },
   
   
})

export default store;