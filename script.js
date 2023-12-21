var num1 = undefined;
var num2 = undefined;
var oprtr = undefined;
var result = undefined;


function add(num1, num2) {
    result = parseInt(num1) + parseInt(num2); 
    result = parseFloat(result.toFixed(2));
    return result;

};  
function subtract(num1, num2){
    result = parseInt(num1) - parseInt(num2); 
    result = parseFloat(result.toFixed(2));
    return result;
};

function multiply(num1,num2){
    result = parseInt(num1) * parseInt(num2); 
    result = parseFloat(result.toFixed(2));
    return result;
};

function divide(num1,num2){
    result = parseInt(num1)/parseInt(num2); 
    result = parseFloat(result.toFixed(2));
    
    return result;
};
var equation = "";

function operate(string){
    
    equation = string.split(/([+,\-,/,x])/g);
    
    oprtr = equation[1];
    num1 = equation[0];
    num2 = equation[2];
    
    if (oprtr == "+") {
        return add(num1,num2);
    } else if(oprtr =="-"){
        return subtract(num1,num2);
    } else if(oprtr == "x"){
        return multiply(num1,num2);
    } else if(oprtr =="/"){
        return divide(num1,num2);
    }
};

const numBut = document.querySelectorAll(".number");
const display = document.querySelector("#display");
const opBut = document.querySelectorAll(".operator")


numBut.forEach(numBut => {
    numBut.addEventListener("click",(e) =>{
        if(display.textContent == "0"){
            display.textContent = "";
        }
        display.textContent += e.target.id;
    })
});

opBut.forEach(opBut =>{
    opBut.addEventListener("click",(e) =>{
        display.textContent += e.target.id;
    });
});


const clear = document.querySelector("#clear")

clear.addEventListener("click",() =>{
    display.textContent = "0";
});

const equals = document.querySelector ("#equals");

equals.addEventListener("click",() =>{
    display.textContent = operate(display.textContent);
});

const del = document.querySelector("#del");
var delCon = ""
del.addEventListener("click",()=>{
    delCon = display.textContent;
    delCon = delCon.slice(0,-1);
    display.textContent =delCon;
});