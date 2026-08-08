const buttons = document.querySelectorAll('.btn')


console.log(buttons[0].innerText);

let arr =[];
let number = 0;
let operator = null;

function add(){
    let sum = arr[0]+arr[1];
    return sum;
}
function difference(){
    return arr[0] - arr[1];
}
function multiply(){
    return arr[0]*arr[1];
}
function divide(){
    return arr[0]/arr[1];
}
function calculateResult(){
    if(operator === '+'){
        return add();
    }
    else if(operator === '-'){
        return difference()
    }
    else if(operator === 'x'){
        return multiply();
    }
    else{
        return divide();
    }
}
function buildNumber(button){
    const val = button.textContent;

    
    if(!isNaN(+val)){
         number = number*10 + Number(val);
    }
    else{
        if(val == 'C'){

        }else{
            if(!operator){
                operator = val
            }
            console.log(operator);
            arr.push(number);
            number=0;
            console.log(arr);
            if(val === '='){
                console.log(calculateResult()); 
                arr=[];
                operator=null;
            }
        }
        
    }
    console.log(number);
   
    
    
}
buttons.forEach((button)=>{
    button.addEventListener('click' , ()=>{
        buildNumber(button)
    })
})