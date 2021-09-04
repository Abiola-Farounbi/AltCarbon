import axios from 'axios'
export default axios.create({
 baseURL: `https://altcarbon.herokuapp.com`,
 headers: {
 'Access-Control-Allow-Origin':'*',
 xsrfHeaderName:'X-CSRFToken',
 xsrfCookieName: 'csrftoken'
 }
 })