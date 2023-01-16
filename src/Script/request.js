/* 17 - login  2 - usuario precisa estar logado, se nao vai para home page. admin consegue acessar apenas admin, comum apenas comum. 
18 - logout - 2 - remove infos de local storage e vai apra homepage
19 - mobile first 2 - login register e home page, 
20 - demonstrar tostfy de acerto com uma mensagem respectiva, demonstrar toastfy com erro */

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
getAllSectors()

const user = getUser() || {};
const { token } = user;
console.log(token)
const baseUrl = "http://localhost:6278/";
const requestHeaders = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};
const email = localStorage.getItem(`@KenzieEmpresas:user`)

export function getUser() {
  const user = JSON.parse(localStorage.getItem("token"))
  return user
}


export async function requestUserInfos(){
  const userInfosGET = await fetch('http://localhost:6278/users/profile',{
    method: 'GET',
    headers:{
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    }
  })
  .then(res => res.json()) 
  .then(res => {
      return res
  })
  console.log(userInfosGET)
  return userInfosGET 
}
export async function requestUserCoworkers(){
  const coworkersInfosGET = await fetch('http://localhost:6278/users/departments/coworkers',{
    method: 'GET',
    headers:{
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    }
  })
  .then(res => res.json()) 
  .then(res => {
      return res
  })
  console.log(coworkersInfosGET)
  return coworkersInfosGET 

}

  





















/*"Content-Type": "application/json",
    
Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiZjg1YmM4NjgtZDNhMy00ZmMxLWIxYmYtZDg1ZGI5MWYwOGEyIiwiaXNfYWRtaW4iOmZhbHNlLCJpYXQiOjE2NzM3NjUwMjMsImV4cCI6MTY3NDYyOTAyMywic3ViIjoiW29iamVjdCBVbmRlZmluZWRdIn0.-11Jw_qGKucvgGMwRyvxzqpbnbxKRBpJXdcSQZHjdOY`
*/