var tokenKey = 'akses_token'

export function getToken(){
return localStorage.getItem(tokenKey)
}
export function setToken(token){
localStorage.setItem(tokenKey, token)
}
export function clearToken(){
localStorage.removeItem(tokenKey)
}