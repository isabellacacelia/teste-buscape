let productImages = document.getElementsByClassName('produtos__imagens');
let productName = document.getElementsByClassName('produto__nome');
let productPriceInstallments = document.getElementsByClassName('produto__preco-parcelado');
let productPriceValue = document.getElementsByClassName('produto__preco-avista');

async function requestFecth() {
    const api = 'js/data.json' 
    const data = await fetch(api) 
    let json = await data.json();
    console.log(json);
    return json; 
}

requestFecth();