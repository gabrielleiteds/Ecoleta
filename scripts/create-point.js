function populateUFs() 
{
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res => res.json() )
    .then( states => {

        for(const state of states) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`;
        }
    })
}

populateUFs(); 

function getCities(event)
{
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector('[name=state]') 
    
    const UF = event.target.value
    
    const indexOfSelectedState = event.target.selectedIndex 

    stateInput.value = event.target.options[indexOfSelectedState].text;
     
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`;
    
    citySelect.innerHTML = "";
    citySelect.disabled = true; 

    fetch(url)
    .then(res => res.json() )
    .then( cities => {
        
        for(const city of cities) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`;
        }

        citySelect.disabled = false
    })
}

document.querySelector("select[name=uf]").addEventListener("change", getCities) 

//itens de coleta
const itemsToCollect = document.querySelectorAll(".items-grid li");

for(let item of itemsToCollect) 
{
    item.addEventListener("click", handleSelectedItem); 
}

const collectedItems = document.querySelector("input[name=item]");

let selectedItems = []; 

function handleSelectedItem(event) {

    const itemLi = event.target; 

    //adicionar ou remover class 
    itemLi.classList.toggle("selected"); 

    const itemId = itemLi.dataset.id; 

    //verificação se há itens selecionados
    //pegar itens
    const alreadySelected = selectedItems.findIndex((item) => {
        const itemFound = item === itemId;

        return itemFound;
    })

    //se ja estiver selecionado, tirar item
    if(alreadySelected != -1) {
        const filteredItems = selectedItems.filter(item => {
            const itemIsdifferent = item !=itemId
            return itemIsdifferent;
        })

        selectedItems = filteredItems; 
    } 
    //se nao, adicionar ao vetor
    else {
        selectedItems.push(itemId)
    } 

    //atualizar o campo com os itens selecionados
    collectedItems.value = selectedItems; 
}