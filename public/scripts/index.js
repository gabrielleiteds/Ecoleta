//botão para abrir modal
const buttonSearch = document.querySelector("#page-home main a");
//modal 
const modal = document.querySelector("#modal")
//fechar modal
const closeModal = document.querySelector("#modal .header a");

//abrir e fechar modal
buttonSearch.addEventListener("click", () => {
    modal.classList.remove("hide")
})

closeModal.addEventListener("click", () => {
    modal.classList.add("hide")
})