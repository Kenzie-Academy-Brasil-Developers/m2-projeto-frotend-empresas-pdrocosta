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