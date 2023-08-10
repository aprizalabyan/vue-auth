export function setSession(data) {
  return localStorage.setItem('userSession', data)
}

export function getSession() {
  return localStorage.getItem('userSession')
}

export function clearSession() {
  return localStorage.clear()
}