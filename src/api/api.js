import axios from 'axios'
// const Qs = require('qs');
axios.defaults.baseURL = ''
axios.defaults.timeout = 5000

const get = (url, params = {}) => new Promise((resolve, reject) => {
    axios.get(url, {
        params
    }).then(res => {
        resolve(res)
    }).catch(err => {
        reject(err)
    })
})

const post = (url, params = {}) => new Promise((resolve, reject) => {
    axios.post(url, params).then(res => {
        resolve(res)
    }).catch(err => {
        reject(err)
    })
})

export default {
    get,
    post
}