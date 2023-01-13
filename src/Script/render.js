/* Honme page - 1 pt, renderizar cards com nome horario e setor */
export function render(array, type) {
    const mainList = document.querySelector('#mainList')
  
    mainList.innerHTML = ''
  
    array.forEach(product => {
      if(type === 'user') {
        const card = createCardUser(product, type)
    
        mainList.appendChild(card)
      } else {}
    })
  }
  
  function createCardUser({id, name, image, price, description, category}, type) {
    const container = document.createElement('li')
    const img = document.createElement('img')
    const productName = document.createElement('p')
    const productDescription = document.createElement('p')
    const productPrice = document.createElement('p')
    const productCategory = document.createElement('span')
  
  
    container.classList = 'flex flex-col gap-2 items-center justify-between border rounded-xl p-8 w-[300px]',
    
    img.classList = "w-[200px] h-[200px]"
    img.src = image
    img.alt = name
  
    productName.innerText = name
    productName.classList = 'text-white text-xl tex self-start mt-8'
  
    productPrice.classList = 'text-white text-xl tex self-start'
    productPrice.innerText = price
  
    productDescription.classList = 'text-white text-xl tex self-start'
    productDescription.innerText = description
  
    productCategory.classList = 'text-white text-sm tex self-start border rounded-full p-2 mt-8'
    productCategory.innerText = category
  
    container.append(img, productName, productPrice, productDescription, productCategory)
  
    return container
  }