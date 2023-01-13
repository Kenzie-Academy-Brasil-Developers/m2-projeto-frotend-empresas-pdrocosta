/*
3- cadstro 1 - cadastrar no formulario api, redirecionar para login
4- cadastro 1 - autenticar via api, armazenar no local storage token, redireciona para dashboard */


import {toast} from './toast.js'



/* export async function createUser(data) {
  const newUser = await fetch(`http://localhost:3333/v1/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  const newUserJson = await newUser.json()

  if(!newUser.ok) {
    toast(newUserJson.message, '#C20803')
  } else {
    toast('Usuário cadastrado com sucesso', '#08C203')
  }

  return newUserJson
}


*/



