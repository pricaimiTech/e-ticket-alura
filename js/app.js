let qtdPistaID = "qtd-pista"
let qtdSuperiorID = "qtd-superior"
let qtdInferiorID = "qtd-inferior"
let qtdPista;
let qtdSuperior;
let qtdInferior;
let typeTicket;
let quantityTicket = 0;

/**
 * @description valida a quantidade de ingressos disponiveis
 */
function getAvaliableTicket() {
    qtdPista = getQuantityTickets(qtdPistaID)
    qtdSuperior = getQuantityTickets(qtdSuperiorID)
    qtdInferior = getQuantityTickets(qtdInferiorID)
    console.log(`qtdPista: ${qtdInferiorID} - qtdSuperior ${qtdSuperior} - qtdInferior: ${qtdInferior}`);
}

function buyTicket() {
    getTypeTicket()
    checkAvaliableTicket(typeTicket, quantityTicket)
}


/**
 * 
 * @param {*} id 
 * @returns a quantidade de ingressos ainda disponíveis
 */
function getQuantityTickets(id) {
    return document.getElementById(id).innerHTML
}

/**
 * @description captura as informações do ingresso que se deseja comprar
 */
function getTypeTicket() {
    typeTicket = document.getElementById("tipo-ingresso").value
    quantityTicket = document.getElementById("qtd").value
}

/**
 * @description valida se é possível comprar o ingresso e se possível realiza a compra
 * @param {} typeTicket tipo de ingresso
 * @param {*} quantityTicket quantidade que se deseja comprar
 */
function checkAvaliableTicket(typeTicket, quantityTicket) {

    let avaliableTicket = getQuantityTickets(`qtd-${typeTicket.toLowerCase()}`)

    if (parseInt(quantityTicket) > parseInt(avaliableTicket)) {
        alert(`Quantidade indisponivel: Apenas ${avaliableTicket} ingressos disponiveis `)
        cleanTicketInputValue()
    } else if(quantityTicket>0) {
        setNewAvaliableQuantity(typeTicket, quantityTicket, avaliableTicket)
        cleanTicketInputValue()
    } else {
        alert("Valide a quantidade adicionada")
    }
}

/**
 * @description limpa o campo de valor da quantidade
 */
function cleanTicketInputValue() {
    document.getElementById("qtd").value = ''
}

/**
 * @description calcula a nova quantidade de ingresso disponíveis e atualiza na base
 * @param {} typeTicket tipo de ingresso
 * @param {*} quantityTicket quantidade de tickets a comprar
 * @param {*} avaliableTicket quantadde de tickets disponiveis para compra
 */
function setNewAvaliableQuantity(typeTicket, quantityTicket, avaliableTicket) {
    let newQuantityTicket = avaliableTicket - quantityTicket
    document.getElementById(`qtd-${typeTicket.toLowerCase()}`).innerHTML = newQuantityTicket   
}