let operater="";
let firstNumber="";
let secondNumber="";


function appendNumber(num){
if(operater===""){
    firstNumber+=num;
    document.getElementById("result").value=firstNumber;
}
else{
    secondNumber+=num;
    document.getElementById("result").value=secondNumber;
}


}
function setOperater(op){
    operater=op;
}

function calculate(){
    let result;
    switch(operater){
        case '+':
            result=parseInt(firstNumber)+parseInt(secondNumber);
            break;
            case '-':
                result=parseInt(firstNumber)-parseInt(secondNumber);
                break;
                case '*':
                    result=parseInt(firstNumber)*parseInt(secondNumber);
                    break;
                    case '/':
                        result=parseInt(firstNumber)/parseInt(secondNumber);
                        break;
    }
    document.getElementById('result').value=result;
}
function clearResult(){
    operater='';
    firstNumber='';
    secondNumber='';
    document.getElementById('result').value='';

}