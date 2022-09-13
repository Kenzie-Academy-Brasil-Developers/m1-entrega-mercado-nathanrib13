const productsFrutas  = []
const productsBebidas = []
const productsHigiene = []

separaProducts(products)

function separaProducts(products){ 
for (let h = 0; h<products.length; h++ ){ 
if (products[h].category === "Frutas"){ 
    productsFrutas.push(products[h])
} else if (products[h].category === "Bebidas"){
    productsBebidas.push(products[h]) 
} else {
    productsHigiene.push(products[h])
}
}
}



//Tratando produtos frutas

const mainFruits = document.querySelector (".products-content")
const ulFruits   = document.createElement ("ul")
mainFruits.appendChild(ulFruits)

for (let i = 0; i<productsFrutas.length; i++){

const li                = document.createElement ("li")
const img               = document.createElement ("img")
const productMain       = document.createElement ("main")
const productTitleH1    = document.createElement ("h1")
const productCategoryH5 = document.createElement ("h5")
const productPrice      = document.createElement ("strong")

ulFruits.appendChild(li)
li.appendChild(img)
li.appendChild(productMain)
productMain.appendChild(productTitleH1)
productMain.appendChild(productCategoryH5)
productMain.appendChild(productPrice)

li.setAttribute('class','product')
img.setAttribute('src', './img/products/no-img.svg')
img.setAttribute ('alt', '')
img.setAttribute('title', '')
img.setAttribute('class', 'product-img')
productMain.setAttribute('class', 'product-main')
productTitleH1.setAttribute('class', 'product-title')
productCategoryH5.setAttribute('class', 'product-category')
productPrice.setAttribute('class', 'product-price')

productTitleH1.innerHTML = productsFrutas[i].title
productCategoryH5.innerHTML = productsFrutas[i].category
productPrice.innerHTML = `R$${productsFrutas[i].price}`
if (productsFrutas[i].image !== undefined) {
    img.src = productsFrutas[i].image
}
}



//Tratando produtos bebidas

const mainBeverages = document.querySelector ("#lista-drinks")
const ulBeverages   = document.createElement ("ul")
mainBeverages.appendChild(ulBeverages)

for (let i = 0; i<productsBebidas.length; i++){

const li                = document.createElement ("li")
const img               = document.createElement ("img")
const productMain       = document.createElement ("main")
const productTitleH1    = document.createElement ("h1")
const productCategoryH5 = document.createElement ("h5")
const productPrice      = document.createElement ("strong")

ulBeverages.appendChild(li)
li.appendChild(img)
li.appendChild(productMain)
productMain.appendChild(productTitleH1)
productMain.appendChild(productCategoryH5)
productMain.appendChild(productPrice)

li.setAttribute('class','product')
img.setAttribute('src', './img/products/no-img.svg')
img.setAttribute ('alt', '')
img.setAttribute('title', '')
img.setAttribute('class', 'product-img')
productMain.setAttribute('class', 'product-main')
productTitleH1.setAttribute('class', 'product-title')
productCategoryH5.setAttribute('class', 'product-category')
productPrice.setAttribute('class', 'product-price')

productTitleH1.innerHTML = productsBebidas[i].title
productCategoryH5.innerHTML = productsBebidas[i].category
productPrice.innerHTML = `R$${productsBebidas[i].price}`
if (productsBebidas[i].image !== undefined) {
    img.src = productsBebidas[i].image
}
}


//Tratando produtos higiene
const mainHigiene = document.querySelector ("#lista-hygiene")
const ulHigiene   = document.createElement ("ul")
mainHigiene.appendChild(ulHigiene)

for (let i = 0; i<productsHigiene.length; i++){

const li                = document.createElement ("li")
const img               = document.createElement ("img")
const productMain       = document.createElement ("main")
const productTitleH1    = document.createElement ("h1")
const productCategoryH5 = document.createElement ("h5")
const productPrice      = document.createElement ("strong")

ulHigiene.appendChild(li)
li.appendChild(img)
li.appendChild(productMain)
productMain.appendChild(productTitleH1)
productMain.appendChild(productCategoryH5)
productMain.appendChild(productPrice)

li.setAttribute('class','product')
img.setAttribute('src', './img/products/no-img.svg')
img.setAttribute ('alt', '')
img.setAttribute('title', '')
img.setAttribute('class', 'product-img')
productMain.setAttribute('class', 'product-main')
productTitleH1.setAttribute('class', 'product-title')
productCategoryH5.setAttribute('class', 'product-category')
productPrice.setAttribute('class', 'product-price')

productTitleH1.innerHTML = productsHigiene[i].title
productCategoryH5.innerHTML = productsHigiene[i].category
productPrice.innerHTML = `R$${productsHigiene[i].price}`
if (productsHigiene[i].image !== undefined) {
    img.src = productsHigiene[i].image
}
}



















