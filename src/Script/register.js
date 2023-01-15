/*3- cadstro 1 - cadastrar no formulario api, redirecionar para login
4- cadastro 1 - autenticar via api, armazenar no local storage token, redireciona para dashboard */
const newUser4 = {}

export async function registerForm(){
  const inputs = document.querySelectorAll(".inputRegister")
  const btn_confirmCadastro = document.querySelector("#btn_confirmCadastro")
 
  console.log(inputs)
    btn_confirmCadastro.addEventListener("click", async(event)=>{
      
      event.preventDefault()

      inputs.forEach((input)=>{
        newUser4[input.name] = input.value
        
      })
      console.log(newUser4)
      const newUserjSon = newUser4.json
      const request = await register(newUser4)
      console.log(request)
      localStorage.setItem('@KenzieEmpresas:user', JSON.stringify(request))

     })
     return newUser4
}
export async function register(data) {

  const loginData = await fetch('http://localhost:6278/auth/register', {
    method: 'POST',
    
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
  },
  })
   // .then((res) => res.json())
    .catch((err) => console.log(err))
    const loginDataJson = await loginData.json();

    if (!loginData.ok) {
      console.log('erro')
      //toast(loginDataJson.message, "#C20803");
    } else {
      //toast("Login realizado com sucesso", "#08C203");
     // window.location.replace("/src/pages/login.html");
    }
  
    return loginDataJson;
  }

  registerForm()

