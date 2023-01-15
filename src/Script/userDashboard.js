/*
14- dashboard user 2 - renderiza infos como user, email, caro e modalidade, possui botao editar
15- dashboard user2  - editar informacoes pessoais, como user, email e senha. atualiza api 
16- dashboard user 2 - renderizare coworkers com nome e cargo, nome da empresa e departamento */

/*const adsfdsdsdf= (localStorage.getItem("@TokenBearer"))
console.log(adsfdsdsdf)
const objToken = {"token":eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiNWEyMDJkYTQtZjE0Yi00NDE4LThmZmQtYTRjN2FiM2MxMTQ1IiwiaXNfYWRtaW4iOmZhbHNlLCJpYXQiOjE2NjY5NjE2MDQsImV4cCI6MTY2NzgyNTYwNCwic3ViIjoiW29iamVjdCBVbmRlZmluZWRdIn0.xY83FhJMTkMETeIbdJedQMFDtEEEXRe3Cb6R28iUY7s}
const baseUrl = "http://localhost:6278/";
const requestHeaders = {
  'Content-Type': 'application/json'
 // Authorization: `Bearer ${objToken}`,
}*/


export async function renderUserInfos(){
  const p_user = document.querySelector("#p_user")
  const p_email = document.querySelector("#p_email")

  const infos = localStorage.getItem("@KenzieEmpresas:user")
  const infos2 = JSON.parse(infos)
  const infos3 = infos2.username

  const email = localStorage.getItem("@KenzieEmpresas:user")
  const email2 = JSON.parse(email)
  const email3 = email2.email

  console.log(infos3)
  p_user.innerHTML = infos3
  p_email.innerHTML = email3
}
renderUserInfos()

async function editUserInfos(){
  const editBtn = document.querySelector("#button-edit")
  const main =  document.querySelector("main")

  editBtn.addEventListener(`click`, ()=>{
    main.insertAdjacentHTML('beforeend',`
    <div class="modal">
    <div class="div-modal">
        <button class="close-button-modal" id="closeBtn"><img src="/src/Assets/iconX.png" alt=""></button>
        <h2 class="h2-modal">Editar Perfil</h2>
        <form action="" class="form-editar">
            <input type="text" name="name" class="input-modal" placeholder="Seu Nome">
            <input type="text" name="email" class="input-modal" placeholder="Seu e-mail">
            <input type="text" name="password" class="input-modal" placeholder="Sua senha">
            
        </form>
        <button class="buttonmodal" id="editGoBtn">Editar Perfil</button>
    </div>
  </div >`), getNewUserInfos()
  
  const modal =  document.querySelector(".modal")
  const closeBtn =  document.querySelector(".close-button-modal")
  if(closeBtn){
    console.log(closeBtn)
    closeBtn.addEventListener(`click`, ()=>{
      modal.classList.add("closeModal")})
  }})
  getNewUserInfos()
 

}


editUserInfos()

export async function getNewUserInfos(){
  const inputs = document.querySelectorAll("input")
  const btnEdit =  document.getElementById("editGoBtn")
  const newInfosUser = {}
  
 if(btnEdit){
  console.log(btnEdit)
  btnEdit.addEventListener(`click`,()=>{
    newInfosUser[inputs.name]=inputs.value
  })}
  console.log(JSON.stringify(newInfosUser))

  return JSON.stringify(newInfosUser)
}

const tokenJSON =  localStorage.getItem('@TokenBearer')
const aodsfkoasd = localStorage.getItem('@TokenBearer')
console.log(aodsfkoasd)

async function getCoworkersByToken(){
  const coworkers = await fetch('http://localhost:6278/users/departments/coworkers' ,
    {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${aodsfkoasd}`
        }
    })
    
    .then((response) => {
      // const asdfasd = localStorage.setItem("@TokenCoworkers", JSON.stringify(response))
      console.log(response)
        return response.json()
    })

    .then((response) => {
        return response
    })
    console.log(coworkers)
    return coworkers
}   
getCoworkersByToken()



getNewUserInfos()



// botao edit nao esta funcionando, precisa pegar as infos e mandar com patch para os ervidor, e entao buscar renderizra os coworkers atraves do {{ _.baseUrl }}/users/departments/coworkersm , metodo get 




























































/*
function renderDash() {
  const user = getUser()

  if(!user) {
    window.location.replace('/')
  } else if(!user.isAdm) {
    window.location.replace('/src/pages/user.html')
  }
}

renderDash()

export async function updateProfile(data) {
  const updatedUser = await fetch(`${baseUrl}/users/profile`, {
    method: "PATCH",
    headers: requestHeaders,
    body: JSON.stringify(data),
  });

  const updatedUserJson = await updatedUser.json();

  if (!updatedUser.ok) {
    toast(updatedUserJson.message, red);
  } else {
    toast("Perfil atualizado", green);
  }

  return updatedUserJson;
}

export async function deleteProfile() {
  const deletedUser = await fetch(`${baseUrl}/users/profile`, {
    method: "DELETE",
    headers: requestHeaders,
  });

  const deletedUserJson = await deletedUser.json();

  if (!deletedUser.ok) {
    toast(deletedUserJson.message, red);
  } else {
    toast("Perfil deletado", green);
    localStorage.clear();
    window.location.replace("/");
  }

  return deletedUserJson;
}

export async function createProduct(data) {
  const newProduct = await fetch(`${baseUrl}/products`, {
    method: "POST",
    headers: requestHeaders,
    body: JSON.stringify(data),
  });

  const newProductJson = await newProduct.json();

  if (!newProduct.ok) {
    toast(newProductJson.message, red);
  } else {
    toast("Produto cadastrado", green);
  }

  return newProductJson;
}
export async function readAllProducts() {
  const products = await fetch(`${baseUrl}/products`, {
    method: "GET",
    headers: requestHeaders,
  });

  const productsJson = await products.json();

  if (!products.ok) {
    toast(productsJson.message, red);
  }

  return products;
}

export async function readProductById(product_id) {
  const product = await fetch(`${baseUrl}/products/${product_id}`, {
    method: "GET",
    headers: requestHeaders,
  });

  const productJson = await product.json();

  if (!product.ok) {
    toast(productJson.message, red);
  }

  return productJson;
}

export async function updateProductById(data, product_id) {
  const product = await fetch(`${baseUrl}/products/${product_id}`, {
    method: "PATCH",
    headers: requestHeaders,
    body: JSON.stringify(data),
  });

  const productJson = await product.json();

  if (!product.ok) {
    toast(productJson.message, red);
  } else {
    toast("Produto atualizado", green);
  }

  return productJson;
}

export async function deleteProductById(product_id) {
  const product = await fetch(`${baseUrl}/products/${product_id}`, {
    method: "DELETE",
    headers: requestHeaders,
  });

  const productJson = await product.json();

  if (!product.ok) {
    toast(productJson.message, red);
  } else {
    toast("Produto deletado", green);
  }

  return productJson;
}*/