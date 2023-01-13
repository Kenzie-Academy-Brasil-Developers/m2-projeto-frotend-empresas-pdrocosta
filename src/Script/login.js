import {login} from './request.js'

async function loginInput() {
    const inputs = document.querySelectorAll(".login_input")
    const button = document.querySelector("#login_btn_page")
    const loginUser = {};
  
    button.addEventListener("click", async (event) => {
     
      inputs.forEach((input) => {
        loginUser[input.name] = input.value
      })
      const request = await login(loginUser)
  
      localStorage.setItem("@KenzieEmpresas:user", JSON.stringify(request)) 
    })
  }
  loginInput()



