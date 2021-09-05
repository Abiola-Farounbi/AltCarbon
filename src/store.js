import { createStore } from "vuex" 
import axios from 'axios'

const store = createStore({
   state: {
     status : false,
     token:''
    },
   mutations:{
      auth_state(state,value) {
         state.token = value
       },
       logout(state) {
         state.token = ''
       },
 
   },
   actions:{
      login({ commit }, user) {
         axios.post('https://altcarbon.herokuapp.com/auth/login/',user )
         .then(resp => {
            const token = resp.data.email
            commit('auth_success', token)
            console.log(resp.data)
          })
          .catch(err => {
            console.log(err.message)
          })
      },
      logout({ commit }) {
           commit('logout')
          }
         },
    getters:{  
     
      isLoggedIn: state => !!state.token,
      
     },
   
   
})

export default store;