export function getToken(){
    let token = window.localStorage.getItem("token")
    if (token == null) {
        return false
    }
    return token
}
