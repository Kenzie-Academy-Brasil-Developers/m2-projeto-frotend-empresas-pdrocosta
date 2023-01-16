/* 5- dashboard admin 1 - filtrar por departamentos, select vindo do api, filtra deparamento atraves do select selecionado 
6 - dashboard admin 1 - criar departamento atraves de abertura de modal, formulario com departamento, descricao e select com as empresas ja cadastraedas
7- dashbopard admin 1 - editar e deletar departamento, atualizar  banco de dado
8- dashboard amin - visualizar departamento, abrir modal com nome, descricao e a q empresa pertence. select com usuarios nao contratdos por nenhuma empresa
9-dashboard admin - escolher um dos usuarios sem departamento do select, e contratar p
10 - dashboard admin - renderiza lista de usuarios que trabalham nesse departamento, cada card tem q ter botao para demitir usuario 
11 - dashboard admin - demitir um funcionario, remove o usuariuo do departamento, endpoint especifico para demitir 
12 - dashboard admin 2 - renderizxar usuarios, rendriza todos usuarios da api, botao para editar e deletar, nao renderiza admin 
12.1 - dashboard admin 2 - editar usuarios, modalidade de trabalho, e cargo
13 - dashboard admin 2 - abri modal com mensagem de confiremacao para deletar, deletado via api 
14- dashboard user 2 - renderiza infos como user, email, caro e modalidade, possui botao editar
15- dashboard user2  - editar informacoes pessoais, como user, email e senha. atualiza api 
16- dashboard user 2 - renderizare coworkers com nome e cargo, nome da empresa e departamento */

import { getAllCompanies, getUser, getAllDptsAdm, getOutofWork, getallUsers, renderChosenDpt, postNewDpt, patchUserInfosAdm, delUserInfos} from "./request.js"


async function renderAllDpts(){
  const allDpts = await getAllDptsAdm()
  const allDptsJSON = [allDpts]
  const ulDpts = document.querySelector("#ul-departamento")
  console.log(ulDpts)
  console.log(allDptsJSON)

  allDpts.map((e)=>{
    ulDpts.insertAdjacentHTML('beforeend',`
    <li class="card-departamento">
                          <h3 class="h3-departamento" >${e.name}</h3>
                          <p class="p-descrição" >${e.description}</p>
                          <p class="p-nome">${e.companies.name}</p>
                          <div class="div-icones">
                              <img class="img-olho" src="/src/Assets/iconEye.png" alt="">
                              <img class="img-lapis" src="/src/Assets/iconPencil.png" alt="">
                              <img class="img-delete" src="/src/Assets/iconTrash.png" alt="">
                          </div>
                      </li>
    
    `)
  })
}
async function renderAllOut(){
  const allOut = await getOutofWork()
  const ulOutOf = document.querySelector("#ul-outof")
  console.log(ulOutOf)
  console.log(allOut)

  allOut.map((e)=>{
    ulOutOf.insertAdjacentHTML('beforeend',`
      
      <li class="card-outof">
      <h3 class="h3-outof">${e.username}</h3>
      <p class="p-outof">${e.kind_of_work} </p>
      <p class="p-outof-nome">${e.email}</p>
      <div class="div-icones">
          <img class="img-lapis" src="src/Assets/iconPencil.png" alt="">
          <img class="img-delete" src="src/Assets/iconTrash.png" alt="">
      </li>
    
    `)
  })
}
async function renderAllUsers(){
  const allUsers = await getallUsers()
  const ulUsers = document.querySelector("#ul-usuarios")
  console.log(allUsers)
  console.log(ulUsers)

  allUsers.map((e)=>{
    ulUsers.insertAdjacentHTML('beforeend',`
      
      <li class="card-outof">
      <h3 class="h3-outof">${e.username}</h3>
      <p class="p-outof">${e.professional_level} </p>
      <p class="p-outof-nome">${e.email}</p>
      <div class="div-icones">
      <button id="edit_btn" onclick="openModal()" value="${e.uuid}"class="img-lapis" type="submit">
     
      </button>
      <button id="delete_btn" class="img-trash" value="${e.uuid} onclick="deleteClick()" type="submit">
      <img class="img-delete"  src="src/Assets/iconTrash.png" alt="">
      </button>
          
      </li>
    
    `)
  })
}

async function renderDPToptions(){
  const allDpts = await getAllDptsAdm()
  const select_empresa = document.querySelector("#select-empresa")
  console.log(allDpts)

  allDpts.map((e)=>{
    select_empresa.insertAdjacentHTML('beforeend',`
    <option class="optionDpt" value="${e.name}">${e.name}</option>
  `)
  })

}
async function filterByDpt(){
  const optionChosen =  document.querySelector("#select-empresa")
  if(optionChosen){
    optionChosen.addEventListener('change', (e)=>{
   
    const chosenDpt =  optionChosen.value
    console.log(chosenDpt)
    renderChosenDpt(chosenDpt)
    })
}}

async function renderSelectEmpresas(){
  window.onload = async function() {
  const select = document.querySelector("#select_new")
  console.log(select)
  const companies = await getAllCompanies()
  const json = JSON.stringify(companies)
    console.log(companies)
if(select){
  companies.map((e)=>{
    select.insertAdjacentHTML('beforeend',`
    <option name="company_uuid" id="${e.name}" value="${e.uuid}">${e.name}</option>
    `)
  })}
  return json
}

}

async function getInfosNewDpt(){
  const btnCreate = document.querySelector("#btnCreate")
  const main =  document.querySelector("main")
  const modal_none =  document.querySelector("#modal_none")
  const inputs = document.querySelectorAll("#input_infos")
  const newInfos = {}
  const select = document.querySelector("#select_new")

  if(btnCreate){
    btnCreate.addEventListener('click', async (e)=>{
      e.preventDefault()
      inputs.forEach((event)=>{
        modal_none.classList.toggle("none")
        newInfos[event.name] = event.value
        
      }) 
      newInfos.company_uuid = select.value
      const newInfosDptJson =  JSON.stringify(newInfos)
      console.log(newInfosDptJson)
      postNewDpt(newInfosDptJson)
    })
    }
   
  }
async function openModal(){
  const button_criar =  document.querySelector("#button-criar")


  if(button_criar){
    button_criar.addEventListener('click', ()=>{
      modal_none.classList.toggle("none")
    })
   
  }
  (getAllCompanies())
}
export async  function closeEditModal(){
  const close = document.querySelector("#close-button-modal")

  close
}
export async function getSelectValueEditUser(){
  const input1 = document.querySelector("#selectEdits1")
  const input2 = document.querySelector("#selectEdits2")
  const btnEdit = document.getElementById("btnEditUser")
  const selectValue = {}
 console.log(input1.value)

  
  btnEdit.addEventListener(`click`,(e)=>{
    e.preventDefault()
      selectValue[input1.name] = input1.value
      selectValue[input2.name] = input2.value

  })
    
  
const selectValueJSON = JSON.stringify(selectValue)
console.log(selectValue)
patchUserInfosAdm(selectValue)
console.log(patchUserInfosAdm(selectValue))
return selectValueJSON


}
 export async function deleteClick(){
  const delete_btn = document.querySelectorAll(".img-delete")
  const uuid = ""
  console.log(delete_btn)
  if(delete_btn){
  delete_btn.addEventListener('click',(e)=>{
    uuid = delete_btn.value
    console.log(uuid)
  })
  console.log(uuid)
  delUserInfos(uuid)
  }
}




deleteClick()
renderAllUsers()
renderAllDpts()
getSelectValueEditUser()
renderAllOut()
renderAllUsers()
renderDPToptions()
filterByDpt()
openModal()
getInfosNewDpt()
renderSelectEmpresas()






























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
} */