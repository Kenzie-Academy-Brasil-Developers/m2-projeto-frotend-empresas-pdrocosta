/* 
2 - home page 1 - filtro por select, escolher um dos setores deve ser filtrado */

import {getAllSectors} from './request.js'

async function renderSector(){
    const selectTag = document.querySelector(`#list_empresas`)
    const sectorAll = await getAllSectors()

    

    sectorAll.map(sector =>{
        selectTag.insertAdjacentHTML('beforeend', `
        <option id="${sector.description}" class="sectorOption"  value="${sector.description}"> 
             ${sector.description} 
        </option>`)
    })
}
renderSector()

async function renderChosenSection(chosenSector){
    const ul_chosen_sectors = document.querySelector(`#ul_chosen_sectors`)
    const url_chosen_sectors = "http://localhost:6278/companies/"

    ul_chosen_sectors.innerHTML=''

    const sector_enterprises = await fetch (url_chosen_sectors,{
        method: 'GET',
    })
    .then(res => res.json()) 
      .then(res => {
          return res
        })

        sector_enterprises.map(element => {
            if(element.sectors.description == chosenSector)
            ul_chosen_sectors.insertAdjacentHTML('beforeend', `
        <li id="${element.name}" class="sectorOption"  value="${element.name}"> 
             <h2>${element.name} </h2>
             <p>${element.opening_hours}</p>
             <button>${chosenSector}</button>
        </li>`)
        });
    
}

let buttonGo =  document.querySelector(`#goValue`)

buttonGo.addEventListener(`click`, (e)=>{
    const sectorSelect = document.querySelector("#list_empresas")
    const chosenSector =  sectorSelect.value
    renderChosenSection(chosenSector)
})

import {login, getUser} from "./request.js";

function renderLogin() {
  const user = getUser()

  if(user && user.is_Adm) {
    window.location.replace("/src/pages/admDashboard.html")
  } else if (user && !user.is_Adm) {
    window.location.replace("/src/pages/userDashboard.html")
  }
}




