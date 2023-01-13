async function loginInput() {
    const inputs = document.querySelectorAll(".login_input")
    const button = document.querySelector("#login_btn_page")
    const loginUser = {};
  
    button.addEventListener("click", async (event) => {
     
      inputs.forEach((input) => {
        loginUser[input.name] = input.value
      })
      // const request = await login(loginUser)
  
      localStorage.setItem("@KenzieEmpresas:user", JSON.stringify(loginUser)) 
    })
  }
loginInput()

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
  
  function renderLogin() {
  const user = getUser()

  if(user && user.is_Adm) {
    window.location.replace("/src/pages/admDashboard.html")
  } else if (user && !user.is_Adm) {
    window.location.replace("/src/pages/userDashboard.html")
  }
}



