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
    console.log(result);
    return result;
};

function multiply(num1,num2){
    result = parseInt(num1) * parseInt(num2); 
    result = parseFloat(result.toFixed(2));
    console.log(result);
    return result;
};

function divide(num1,num2){
    result = parseInt(num1)/parseInt(num2); 
    result = parseFloat(result.toFixed(2));
    console.log(result);
    return result;
};


function operate(string){
    console.log(string);
    var equation = string.split("");
    oprtr = equation[1];
    num1 = equation[0];
    num2 = equation[2];
    console.log(oprtr);
    if (oprtr === "+") {
        console.log("hello")
        return add(num1,num2);
    } else if(oprtr ==="-"){
        console.log("goodbye")
        return subtract(num1,num2);
    } else if(oprtr === "*"){
        return multiply(num1,num2);
    } else if(oprtr ==="/"){
        return divide(num1,num2);
    }
};

const numBut = document.querySelectorAll(".number");

numBut.forEach(numBut => {
    numBut.addEventListener("click",(e) =>{
        console.log(e.target);
    })
});