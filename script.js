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


//Operate splits the equation in the display and performs calls a function depening on the operator
function operate(string){
    
    equation = string.split(/([+,\-,/,x])/g);

    for (let i = 0; i < equation.length; i++) {
        if(equation[i] == "x"){
            equation[i-1] = multiply(equation[i-1],equation[i+1]);
            equation.splice(i,2);
            console.log(equation);
            i=0;
        } else if(equation[i] == "/"){
            equation[i-1] = divide(equation[i-1],equation[i+1]);
            equation.splice(i,2);
            console.log(equation);
            i=0;
        } 
    }

    for (let i = 0; i < equation.length; i++){
        if(equation[i] == "+"){
            equation[i-1] = add(equation[i-1],equation[i+1]);
            equation.splice(i,2);
            console.log(equation);
            i=0;
        } else if(equation[i] == "-"){
            equation[i-1] = subtract(equation[i-1],equation[i+1]);
            equation.splice(i,2);
            console.log(equation);
            i=0;
        } 
    };
    return equation[0];
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