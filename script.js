var num1 = undefined;
var num2 = undefined;
var oprtr = undefined;

function add(num1, num2) {
    var result = parseInt(num1) + parseInt(num2); 
    result = result.toFixed(2);
    console.log(result);
    return result;

};  
function subtract(num1, num2){
    result = Math.sign(num1-num2);
    return result.toFixed(2);
};

function multiply(num1,num2){
    result = num1*num2;
    return result.toFixed(2);
};

function divide(num1,num2){
    result = num1/num2;
    return result.toFixed(2);
};


function operate(string){
    console.log(string);
    var equation = string.split("");
    var oprtr = equation[1];
    var num1 = equation[0];
    var num2 = equation[2];
    console.log(oprtr);
    if (oprtr = "+") {
        return add(num1,num2);
    } else if(oprtr ="-"){
        subtract(num1,num2);
    } else if(oprtr = "*"){
        multiply(num1,num2);
    } else if(oprtr ="/"){
        divide(num1,num2);
    }
};