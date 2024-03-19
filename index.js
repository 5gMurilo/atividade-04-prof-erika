import { area } from './src/area.js'
import { media } from './src/media.js'
import { media_unicsul } from './src/municsul.js'

function initialize() {
    document.getElementById("areaButton").addEventListener("click", calculaArea); //adiciona função ao botão de calculo de área
    document.getElementById("mediaButton").addEventListener("click", calculaMedia); //adiciona função ao botão de calculo de média
    document.getElementById("mUnicsulButton").addEventListener("click", calculaMediaUnicsul); //adiciona função ao botão de calculo de média unicsul
}

function calculaArea() { 
    let v1 = parseFloat(document.getElementById("baseInput").value);
    let v2 = parseFloat(document.getElementById("heightInput").value);

    let result = area(v1, v2);
    document.getElementById("areaResult").innerText = `A área total é de ${result.toFixed(2)}`;
    document.getElementById("baseInput").value = '';
    document.getElementById("heightInput").value = '';
}
function calculaMedia() {
    let v1 = parseFloat(document.getElementById("iv1").value);
    let v2 = parseFloat(document.getElementById("iv2").value);
    let v3 = parseFloat(document.getElementById("iv3").value);

    let result = media(v1,v2,v3);
    document.getElementById("mediaResult").innerText = `A área média dos três números é de ${result.toFixed(2)}`;

    document.getElementById("iv1").value = '';
    document.getElementById("iv2").value = '';
    document.getElementById("iv3").value = '';
}

function calculaMediaUnicsul() {

    let v1 = parseFloat(document.getElementById("a1").value);
    let v2 = parseFloat(document.getElementById("parcial").value);
    let v3 = parseFloat(document.getElementById("trabalhos").value);

    let result = media_unicsul(v1,v2,v3);

    document.getElementById("mUnicsulResult").innerText = `A área média dos três números é de ${result.toFixed(2)}`;

    document.getElementById("a1").value = ''
    document.getElementById("parcial").value = ''
    document.getElementById("trabalhos").value = ''
}

initialize();