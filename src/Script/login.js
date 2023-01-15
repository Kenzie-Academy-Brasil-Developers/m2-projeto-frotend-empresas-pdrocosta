export async function loginInput() {
    const inputs = document.querySelectorAll(".login_input")
    const button = document.querySelector("#login_btn_page")
    const loginUser = {};

    console.log(button)
  
    button.addEventListener("click", async (event) => {
      event.preventDefault()
      inputs.forEach((input) => {
        loginUser[input.name] = input.value
      })
      const newUserjSon = loginUser.json
      console.log(JSON.stringify(loginUser))
      const asdfasd = localStorage.setItem("@TokenUser", newUserjSon)

      const request = await loginUser2(loginUser)
      
    })
    return loginUser
  }
  export async function getAuthorization(user) {
    console.log(await user)
    const userToken = await user
    const userAuth = await fetch('http://localhost:6278/auth/validate_user',
    {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken.token}`
        }
    })
    
    .then((response) => {
       const asdfasd = localStorage.setItem("@TokenBearer",userToken.token)
      console.log(asdfasd)
        return response.json()
    })

    .then((response) => {
        return response
    })

    return userAuth
}   

async function getUser(dataUser, token) {
    const token2 = JSON.parse(localStorage.getItem(`token- ${dataUser.email} `))
    console.log(token)
    return token;
}




 export async function loginUser2(loginInfo) {
    const loginData = await fetch('http://localhost:6278/auth/login',{ 
    method: 'POST',
    //Authorization: `Bearer ${token}`,
    body: JSON.stringify(loginInfo),
    headers: {
      'Content-Type': 'application/json'
 }})
 console.log(loginInfo)
 const loginDataJson =  await loginData.json()
 console.log(loginDataJson)
  localStorage.setItem(`token-${loginInfo}`, JSON.stringify(loginDataJson))
 
  const token1234 = getUser(loginInfo, loginDataJson)
  const auth = await getAuthorization(getUser(loginInfo, loginDataJson))
  console.log(auth)
  localStorage.setItem("@KenzieUser",JSON.stringify(loginInfo.email))
  if(auth){
    window.location.replace("/pages/pages/admDashboard.html")
  }
  else{
    window.location.replace("/")
  }
  return auth
}


  loginInput()


