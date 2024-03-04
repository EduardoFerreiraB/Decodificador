let botaoCripto = document.getElementById("button_criptografar");
let botaoDecripto = document.getElementById("button_descriptografar");
let botaoCopiar = document.getElementById("button_copy");
let body = document.querySelector("body");

function telaInicio(){
    let initialOutput = document.querySelector(".container_output_details");
    let hidenOutput = document.querySelector(".output_decodificado");
    hidenOutput.style.display = "none";
    initialOutput.style.display = "block";
}

function copy() {
    let txtToCopy = document.querySelector("#output_text").innerHTML;
    navigator.clipboard.writeText(txtToCopy);
}

function cleanOutputArea() {
    // adiciona display: none no content-output-details
    let initialOutput = document.querySelector(".container_output_details");
    initialOutput.style.display = "none";
}

function getInput() {
    let stringInput = document.querySelector(".content-input-text");
    let string = stringInput.value;
    return string;
}

function addTextOutput() {
    // adiciona display: flex no output-decoded
    let showOutput = document.querySelector(".output_decodificado");
    showOutput.style.display = "flex";
}

function showOutputText(stringToShow) {
    // adiciona o resultado de criptografar ou descriptografar no output-text
    let tagOutputText = document.querySelector(".output_text");
    tagOutputText.innerHTML = stringToShow;
}

function encrypt(stringToEncrypt) { 
    
    let encryptedString = 
    stringToEncrypt
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

    cleanOutputArea();  
    addTextOutput();
    showOutputText(encryptedString)
    return encryptedString;
}

function decrypt(encryptedString) {

    let decryptedString = 
    encryptedString
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

    cleanOutputArea();
    addTextOutput();
    showOutputText(decryptedString)
    return decryptedString;
}

botaoCripto.addEventListener("click", (e) => {
    let frase = getInput();
    if (frase != "") {
        encrypt(frase);
    } else {
        showInitialOutput();
    }
});

botaoDecripto.addEventListener("click", (e) => {
    let frase = getInput();
    if (frase != "") {
        if (frase.includes("enter")||frase.includes("imes")||frase.includes("ai")||frase.includes("ober")||frase.includes("ufat")) {
            decrypt(frase);
        } else {
            showInitialOutput();
        }        
    } else {
        showInitialOutput();
    }
});

botaoCopiar.addEventListener("click", copy);