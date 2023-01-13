/* 17 - login  2 - usuario precisa estar logado, se nao vai para home page. admin consegue acessar apenas admin, comum apenas comum. 
18 - logout - 2 - remove infos de local storage e vai apra homepage
19 - mobile first 2 - login register e home page, 
20 - demonstrar tostfy de acerto com uma mensagem respectiva, demonstrar toastfy com erro */

import {toast} from './toast.js'

export async function getAllSectors(){
    const sectors = await fetch(`http://localhost:6278/sectors`, {
        method: 'GET',
      })
      .then(res => res.json()) 
      .then(res => {
          return res
      })
      return sectors 
}
export async function login(loginInfo) {
    const loginData = await fetch(`http://localhost:6278/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        body: JSON.stringify(loginInfo),
      }
    })
  
    const loginDataJson = await loginData.json()
  
    if (!loginData.ok) {
      toast(loginDataJson.message, "#C20803")
    } else {
         toast("Login realizado com sucesso", "#08C203")
    }
  
    return loginDataJson;
  }
  
  const {token} = getUser()
  export function getUser() {
    const user = JSON.parse(localStorage.getItem("@KenzieEmpresas:user"));
  
    return user;
  }