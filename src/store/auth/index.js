import axios from "axios"
import { setSession, getSession, clearSession } from "@/helpers/session"
import router from "@/router"

export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    login({}, data) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'POST',
          url: 'https://dummyjson.com/auth/login',
          headers: { 'Content-Type': 'application/json' },
          data: JSON.stringify({
            username: data?.username,
            password: data?.password,
          })
        })
        .then((res) => {
          resolve(res)
          setSession(res.data.token)
        })
        .catch((err) => {
          reject(err)
        })
      })
    },
    logout() {
      if (router.currentRoute.name !== 'Login') {
        clearSession()
        router.push('/login')
      }
    },
  }
}