import { encrypt, decrypt } from "./encrypt"

export function setSession(data) {
  return localStorage.setItem('userSession', encrypt(data))
}

export function getSession() {
  let userSession = localStorage.getItem('userSession')
  return decrypt(userSession || {})
}

export function clearSession() {
  return localStorage.clear()
}