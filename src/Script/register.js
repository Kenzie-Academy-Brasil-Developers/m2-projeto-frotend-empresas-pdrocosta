/*
3- cadstro 1 - cadastrar no formulario api, redirecionar para login
4- cadastro 1 - autenticar via api, armazenar no local storage token, redireciona para dashboard */
 import {toast} from './toast.js'
import {} from './global.js'
import { getUser } from './index.js'


export async function getRegisterInput(){
  const inputs = document.querySelectorAll(".inputRegister")
  const btn_confirmCadastro = document.querySelector("#btn_confirmCadastro")
  const newUser = {}

  
  btn_confirmCadastro.addEventListener('click', async(e)=>{
    inputs.forEach((input)=>{
      newUser[input.name] = input.value
    })
    const request = await createUser(newUser)})
   
   return newUser
}

export async function createUser(data) {
  
  const dataJSon = JSON.stringify(data)
  console.log(dataJSon)
  const newUser = await fetch(`http://localhost:6278/auth/register`, {
    method: 'POST',
    headers: {"Content-Type": "application/json",
 },
    body: JSON.stringify(dataJSon)
 }).catch(console.log(console.error()))

  const newUserJson = await newUser.json()
  console.log(newUser )
  if(!newUser.ok) {
  toast(newUserJson.message, '#C20803')
   //console.log("erro")
  } else {
   // console.log("logado")
    toast('Usuário cadastrado com sucesso', '#08C203')
  }

  return newUserJson
}


console.log(createUser(getRegisterInput()))


/* export async function readProfile() {
  const loggedUser = await fetch(`${baseUrl}/users/profile`, {
    method: "GET",
    headers: requestHeaders,
  });

  console.log(loggedUser)

  const loggedUserJson = await loggedUser.json();

  if (!loggedUser.ok) {
    toast(loggedUserJson.message, "#C20803");
  }

  return loggedUserJson;
}
*/
