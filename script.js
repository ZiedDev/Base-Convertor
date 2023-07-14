/*
//variables
let inputNum;
let outputNum;

//input
let inputField = document.querySelector("#input-field");
let inputBase = 2;

function storeInputBaseIndex() {
    let inputBases = document.getElementById("base-input");
    let inputBasesIndex = inputBases.selectedIndex;
    inputBase = Number(String(inputBases.options[inputBasesIndex].text.charAt(5)) + String(inputBases.options[inputBasesIndex].text.charAt(6)));
}

//output
let outputBase = 2;

function storeOutputBaseIndex() {
    let outputBases = document.getElementById("base-output");
    let outputBasesIndex = outputBases.selectedIndex;
    outputBase = Number(String(outputBases.options[outputBasesIndex].text.charAt(5)) + String(outputBases.options[outputBasesIndex].text.charAt(6)));
}

//calculate
const calcBtn = document.getElementById("calculate-button");

calcBtn.addEventListener("click", calculate);
inputField.addEventListener("keypress", function (e) {
    if (e.key == "Enter") calculate();
})

function calculate() {
    inputNum = parseInt(inputField.value, inputBase);

    outputNum = inputNum.toString(outputBase);
    document.getElementById("output").textContent = outputNum;
}




//Original system
// let inputNum = Number(prompt("type the input number"));
// console.log(`The decimal number: ${inputNum}`);

// let outputNum = inputNum.toString(prompt("Choose the base value"));
// console.log(`The binary number: ${outputNum}`);
*/

//variables
let inputNum;
let outputNum;

//input
let inputField = document.querySelector("#input-field");
let inputBase = 2;

//output
let outputBase = 2;

//calculate
const calcBtn = document.getElementById("calculate-button");

calcBtn.addEventListener("click", calculate);
inputField.addEventListener("keypress", function (e) {
    if (e.key == "Enter") calculate();
})

function calculate() {
    inputNum = parseInt(inputField.value, inputBase);

    outputNum = inputNum.toString(outputBase);

    document.getElementById("output").textContent = outputNum;

    console.log(`inputNum: ${inputNum}, outputNum: ${outputNum}, input Base: ${inputBase}, output Base: ${outputBase}`);
}

//Drop down selector
document.querySelectorAll('.base-input').forEach(setupInputBaseSelector);

document.querySelectorAll('.base-output').forEach(setupOutputBaseSelector);

//Dirty code too lazy to fix 😪
function setupInputBaseSelector(selector) {
    selector.addEventListener('change', e => {
        inputBase = e.target.value;
    })

    selector.addEventListener('mousedown', e => {
        if (window.innerWidth >= 420) {// override look for non mobile
            e.preventDefault();

            const select = selector.children[0];
            const dropDown = document.createElement('ul');
            dropDown.className = "selector-options";

            [...select.children].forEach(option => {
                const dropDownOption = document.createElement('li');
                dropDownOption.textContent = option.textContent;

                dropDownOption.addEventListener('mousedown', (e) => {
                    e.stopPropagation();
                    select.value = option.value;
                    selector.value = option.value;
                    select.dispatchEvent(new Event('change'));
                    selector.dispatchEvent(new Event('change'));
                    dropDown.remove();
                });

                dropDown.appendChild(dropDownOption);
            });

            selector.appendChild(dropDown);

            // handle click out
            document.addEventListener('click', (e) => {
                if (!selector.contains(e.target)) {
                    dropDown.remove();
                }
            });
        }
    });
}

function setupOutputBaseSelector(selector) {
    selector.addEventListener('change', e => {
        outputBase = e.target.value;
    })

    selector.addEventListener('mousedown', e => {
        if (window.innerWidth >= 420) {// override look for non mobile
            e.preventDefault();

            const select = selector.children[0];
            const dropDown = document.createElement('ul');
            dropDown.className = "selector-options";

            [...select.children].forEach(option => {
                const dropDownOption = document.createElement('li');
                dropDownOption.textContent = option.textContent;

                dropDownOption.addEventListener('mousedown', (e) => {
                    e.stopPropagation();
                    select.value = option.value;
                    selector.value = option.value;
                    select.dispatchEvent(new Event('change'));
                    selector.dispatchEvent(new Event('change'));
                    dropDown.remove();
                });

                dropDown.appendChild(dropDownOption);
            });

            selector.appendChild(dropDown);

            // handle click out
            document.addEventListener('click', (e) => {
                if (!selector.contains(e.target)) {
                    dropDown.remove();
                }
            });
        }
    });
}