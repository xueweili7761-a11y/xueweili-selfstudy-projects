const run = document.getElementById('run')
function calculator(){
let num1=parseFloat(document.getElementById('num1').value);
let num2=parseFloat(document.getElementById('num2').value);
let operator =document.getElementById('operator').value;
let result;
    if( operator==='add'){
    result=num1+num2;
}
else if(operator==='subtract'){
    result=num1-num2;
}
else if(operator==='multiply'){
    result=num1*num2;
}
else if(operator==='divide') {
    if(num2!==0){
        result=num1/num2;
    }else{
        result='num2 can not be 0'
    }
}
document.getElementById('result').value=result
}

run.addEventListener('click',calculator)