/* 17 - login  2 - usuario precisa estar logado, se nao vai para home page. admin consegue acessar apenas admin, comum apenas comum. 
18 - logout - 2 - remove infos de local storage e vai apra homepage
19 - mobile first 2 - login register e home page, 
20 - demonstrar tostfy de acerto com uma mensagem respectiva, demonstrar toastfy com erro */

// import { getRegisterInput} from './register.js'
// import {toast} from './toast.js'
/*
import { getUser } from './index.js'
*/
// import {loginInput } from `./login.js`
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

/*
async function registerUser(userInfos){
  const user = await fetch ('http://localhost:6278/auth/register',{
    method: 'POST',
    headers: {"Content-Type": "application/json",
    Authorization: `Bearer ${token}`}
  }
  .then((response)=>{
    console.log (response.userInfos)
  }
))}
registerUser(getRegisterInput()) */

getAllSectors()

const user = getUser() || {};
const { token } = user;
const baseUrl = "http://localhost:3333/v1";
const requestHeaders = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
};
const red = "#C20803";
const green = "#08C203";
const email = localStorage.getItem(`@KenzieEmpresas:user`)
console.log(email)
export function getUser() {
  const user = JSON.parse(localStorage.getItem("token- ${} "))

  return user;
}


/*"Content-Type": "application/json",
    
Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiZjg1YmM4NjgtZDNhMy00ZmMxLWIxYmYtZDg1ZGI5MWYwOGEyIiwiaXNfYWRtaW4iOmZhbHNlLCJpYXQiOjE2NzM3NjUwMjMsImV4cCI6MTY3NDYyOTAyMywic3ViIjoiW29iamVjdCBVbmRlZmluZWRdIn0.-11Jw_qGKucvgGMwRyvxzqpbnbxKRBpJXdcSQZHjdOY`
*/