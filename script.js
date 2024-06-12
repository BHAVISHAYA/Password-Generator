let num = document.getElementById("getNum");
let genBtn = document.querySelector(".genBtn");
let checkSign = document.querySelector(".passwordCard");
let clipBoard = document.getElementById("clipBoard");
let arr = [];

const generateUpperCase = () => {
    let charIndex = (Math.floor(Math.random() * 26)) + 65;
    let char = String.fromCharCode(charIndex);
    return char;
}
const generateLowerCase = () => {
    let charIndex = (Math.floor(Math.random() * 26)) + 97;
    let char = String.fromCharCode(charIndex);
    return char;
}
const generateNumber = () => {
    let indexValue = Math.floor(Math.random() * 10) + 48;
    let char = String.fromCharCode(indexValue);
    return char;
}
const generateSymbol = () => {
    let symbolArr = ['!', '@', '#', '$', '%', '^', '&', '*', '_'];
    let indexValue = Math.floor(Math.random() * 9);
    return symbolArr[indexValue];
}

const generateMyPassword = () => {
    if(num.value === "") alert("Please enter the length of password...!!"); 
    else {
        if(arr.length === 0) alert("Please select atleast one checkBox....!!");
        let userInput = num.value;
        console.log(`Use Input : ${userInput}`);
        console.log(`Arr : ${arr}`);
        let passWord = "";
        let dupArr = [...arr];
        let dupArr2 = [...arr];
        for(let i = 1 ; i <= userInput ; i++) {
            let index = Math.floor(Math.random() * arr.length);
            console.log(`Index = ${index}`);
            console.log(`Arr[Index] = ${arr[index]}`);
            if(arr[index] === 0) {
                passWord = passWord + generateUpperCase();
                if(passWord.length === userInput) break;
            }
            else if(arr[index] === 1) {
                passWord = passWord + generateLowerCase();
                if(passWord.length === userInput) break;
            }
            else if(arr[index] === 2) {
                passWord = passWord + generateNumber();
                if(passWord.length === userInput) break;
            }
            else if(arr[index] === 3) {
                passWord = passWord + generateSymbol();
                if(passWord.length === userInput) break;
            }
            arr.splice(index, 1);
            if(arr.length === 0) arr = [...dupArr];
            console.log(arr);
        }
        console.log(passWord);
        document.getElementById("myOutput").value = passWord;
        arr = [...dupArr2];
    }
;}

const includeInArray = (name) => {
    if(name === "UpperCase") name = 0;
    else if(name === "LowerCase") name = 1;
    else if(name === "Numbers") name = 2;
    else name = 3;
    if(arr.includes(name)) 
    arr.splice(arr.indexOf(name), 1);
    else 
    arr.push(name);
}

genBtn.addEventListener('click', () => {
    generateMyPassword();
})


checkSign.addEventListener('click', (event) => {
    if(event.target.name.length !== 0)
    includeInArray(event.target.name);
})


clipBoard.addEventListener('click', () => {
    navigator.clipboard.writeText(document.getElementById("myOutput").value);
})