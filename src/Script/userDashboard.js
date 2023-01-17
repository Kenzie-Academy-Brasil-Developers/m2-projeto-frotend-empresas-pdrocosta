/*
14- dashboard user 2 - renderiza infos como user, email, caro e modalidade, possui botao editar
15- dashboard user2  - editar informacoes pessoais, como user, email e senha. atualiza api 
16- dashboard user 2 - renderizare coworkers com nome e cargo, nome da empresa e departamento */


import {requestUserInfos, requestUserCoworkers, patchUserInfos} from './request.js'


export async function renderUserInfos(){
  const p_user = document.querySelector("#p_user")
  const p_email = document.querySelector("#p_email")
  const p_modalidade = document.querySelector("#p_modalidade")

  const infos = await requestUserInfos()
  const email =  await infos.email
  const username =  await infos.username
  const modalidade = await infos.professional_level


  p_modalidade.innerHTML = modalidade
  p_user.innerHTML = username
  p_email.innerHTML = email
}
renderUserInfos()


export async function renderCoworkersInfos(){
const ul_coworkers = document.querySelector("#ul_coworkers")
const coworkersInfos =  await requestUserCoworkers()
const companyAndDptName = document.getElementById(companyAndDptName)

companyAndDptName.innerText(`${coworkersInfos.description}`)
ul_coworkers.insertAdjacentHTML('afterbegin',`
    <li class="coworkers-card" id="${coworkersInfos.users.username}.card">
    <h3 class="h3-nome">${coworkersInfos.users.username}</h3>
    <p class="p-posição">${coworkersInfos.users.professional_level}</p>
</li>
`)}
renderCoworkersInfos()



async function editUserInfos(){
  const editBtn = document.querySelector("#button-edit")
  const main =  document.querySelector("main")

  editBtn.addEventListener(`click`, ()=>{
    main.insertAdjacentHTML('beforeend',`
    <div class="modal">
    <div class="div-modal" id="div_modal">
        <button class="close-button-modal" id="closeBtn"><img src="/src/Assets/iconX.png" alt=""></button>
        <h2 class="h2-modal">Editar Perfil</h2>
        <form action="" class="form-editar">
            <input type="text" name="name" class="input-modal" placeholder="Seu Nome">
            <input type="text" name="email" class="input-modal" placeholder="Seu e-mail">
            <input type="text" name="password" class="input-modal" placeholder="Sua senha">
            <button class="buttonmodal" type="submit" id="editGoBtn">Editar Perfil</button>
        </form>
        
    </div>
  </div >`)
  
  const modal =  document.querySelector(".modal")
  const closeBtn =  document.querySelector(".close-button-modal")
  if(closeBtn){
    console.log(closeBtn)
    closeBtn.addEventListener('click', (event)=>{
      event.preventDefault
      modal.classList.add("closeModal")})
  }})
  
    const inputs = document.querySelectorAll("input")
    const newInfosUser = {}
    const btnEdit =  document.querySelector(".buttonmodal")
    
    if(btnEdit){
    console.log(btnEdit)
    btnEdit.addEventListener('click',(event)=>{
      event.preventDefault
      newInfosUser[inputs.name]=inputs.value
      console.log(JSON.stringify(newInfosUser))
    })
    return newInfosUser
  }
  }
 
  const mock = {
    "username": "Kenzinho M2",
    "password": "123456",
    "email": "kenzinhoM2@mail.com"
  }



  patchUserInfos(mock)
  console.log(patchUserInfos(mock))

export async function logout(){
  const btn_logout = document.getElementById(btn_logout)
  console.log(btn_logout)
  if(btn_logout){
  btn_logout.addEventListener(`click`, (event)=>{
    event.preventDefault
    localStorage.clear()
    window.replace.(".../index.html")
  })}
}
logout()
editUserInfos()
renderUserInfos() 






























































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