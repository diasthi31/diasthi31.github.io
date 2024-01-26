import { modal } from './modal.js';
import { alertError } from './alertError.js';
import { calculateIMC, notANumber } from "./utils.js";

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

inputWeight.oninput = () => alertError.close();
inputHeight.oninput = () => alertError.close();

form.onsubmit = (event) => {
    event.preventDefault();

    const weight = inputWeight.value, height = inputHeight.value, weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height);

    if(weightOrHeightIsNotANumber) {
        alertError.open();
        return;
    }

    alertError.close();
    
    const result = calculateIMC(weight, height);
    displayResultMessage(result);
}

function displayResultMessage(result) {
    modal.message.innerText = `Seu IMC é de ${result}`;
    modal.open();
}

