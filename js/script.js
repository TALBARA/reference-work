/* Exercise 1 */ 

function getRandomArrayOfNumbers(){
    return Array.from({length:5}, () => Math.floor(Math.random() * 10 ) + 1);
}

function parseArrayStringToInt(label) {
    let inputText = document.getElementById(label).value;
    return inputText.split(',').map(element => parseInt(element));
}

function sum(label){
    return parseArrayStringToInt(label).reduce((previousValue, currentValue) => previousValue + currentValue ,0)
}

function setDefaultInputValue(label){
    return document.getElementById(label).value = getRandomArrayOfNumbers();
}

function calculate(label){
    document.getElementById("sum").textContent = sum(label);
    document.getElementById("avg").textContent = sum(label) / parseArrayStringToInt(label).length;
    document.getElementById("major").textContent = Math.max(...parseArrayStringToInt(label));
    document.getElementById("minor").textContent = Math.min(...parseArrayStringToInt(label));
}

/* Exercise 2 */ 

function concatValues(){
    let concatArrays = [...parseArrayStringToInt("input-text-2-1"), ...parseArrayStringToInt("input-text-2-2")]
    document.getElementById("concat-arrays").textContent = concatArrays;
}

/* Exercise 3 */ 

function upwardSort(label) {
    let upward = parseArrayStringToInt(label).sort((a,b) => a - b);
    document.getElementById("upward").textContent = upward;
}

function descentSort(label){
    let descent = parseArrayStringToInt(label).sort((a,b) => b -a);
    document.getElementById("descent").textContent = descent;
}

/* Exercise 4 */ 

function createOptions(label){

    setDefaultInputValue(label);

    let arrayOfNumbers = parseArrayStringToInt(label);

    let select = document.getElementById("select-of-array-positions");
    select.innerHTML = [];

    arrayOfNumbers.map((element, pos) => {

        let option = document.createElement("option");
        option.textContent = ++pos;
        option.value = --pos;

        select.appendChild(option);
    })
}

function replaceValueInArray(label) {
    let arrayOfNumbers = parseArrayStringToInt(label);
    let selectPosition = document.getElementById("select-of-array-positions").value;
    let inputReplaceValue = document.getElementById("replace-value").value;
    arrayOfNumbers.splice(selectPosition, 1, inputReplaceValue);
    document.getElementById("array-replaced").textContent = arrayOfNumbers;
}