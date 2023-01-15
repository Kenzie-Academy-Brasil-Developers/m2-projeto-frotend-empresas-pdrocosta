/*3- cadstro 1 - cadastrar no formulario api, redirecionar para login
4- cadastro 1 - autenticar via api, armazenar no local storage token, redireciona para dashboard */


export async function registerForm(){
  const inputs = document.querySelectorAll(".inputRegister")
  const btn_confirmCadastro = document.querySelector("#btn_confirmCadastro")
  const newUser = {}
  
    btn_confirmCadastro.addEventListener('click', async(event)=>{

      event.preventDefault()

      inputs.forEach((input)=>{
        newUser[input.name] = input.value
      })
      
      const request = await login(JSON.stringify(newUser))

      localStorage.setItem('@KenzieEmpresas:user', JSON.stringify(request))


     })
     return newUser
}
export async function login(data) {

  const urlsdf = "http://localhost:6278//auth/register"
  const loginData = await fetch(urlsdf, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return loginData;
}


export async function createUser(data) {
  
  const dataJSon = JSON.stringify(data)
  console.log(dataJSon)
  const newUser = await fetch(`http://localhost:6278/auth/register`, {
    method: 'POST',
    headers: {"Content-Type": "application/json",
 },
    body: JSON.stringify(dataJSon)
 })
 .then( (response => response.json() ))
 .catch(console.log(`error`))
  return newUser
}
/*const newUserJson = await createUser(getRegisterInput())
  console.log(newUserJson)
  if(!newUserJson) {
  //toast(newUserJson.message, '#C20803')
   console.log("erro")
  } else {
    console.log("logado")
    //toast('Usuário cadastrado com sucesso', '#08C203')*/
  

  function createUserForm() {
    const inputs = document.querySelectorAll('.inputRegister')
    const button = document.querySelector('#btn_confirmCadastro')
    const newUser = {}
  
    button.addEventListener('click', async (event) => {
      event.preventDefault()
  
      inputs.forEach(input => {
        newUser[input.name] = input.value
      })
  
      const request = await createUser(newUser)
    })
  
    return newUser
  }
  registerForm()
  createUserForm()

  export const name = () => {};
  async function confirmUser(){

    const newUserJson =  createUser
    console.log(newUserJson)
    if(!newUserJson) {
    //toast(newUserJson.message, '#C20803')
     console.log("erro")
    } else {
      console.log("logado")
      //toast('Usuário cadastrado com sucesso', '#08C203')
    }
    return newUserJson
    } 
   // createUser(getRegisterInput())
     confirmUser()

  

  






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
