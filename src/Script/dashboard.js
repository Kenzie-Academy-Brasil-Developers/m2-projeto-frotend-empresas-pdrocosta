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

import { getUser } from "./requests.js";

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
}