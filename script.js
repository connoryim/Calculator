function add(num1, num2) {
    result = num1 + num2;  
    return result.toFixed(2);
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