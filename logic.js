let input = "";
let buttons = document.querySelectorAll('.btn');
let display = document.querySelector('.display-result');

function clearDisplay(){
    input ="";
    display.value = 0;
}

function computeResult(input){
    try{
        return eval(input);
    }catch{
        return "Invalid Expression";
    } 
}

function displayContent(content){
    display.value =`${content}`
}

buttons.forEach((button)=>{
    button.addEventListener('click' ,()=>{
        
        if(button.textContent == '='){
            if(input != ""){
                let result = computeResult(input);
                if(!isNaN(result)){
                    input =result;
                }else{
                    input =""; 
                }
            displayContent(result);
            }
        }
        else{
            if(button.textContent == 'C'){
                clearDisplay();
            }else{
                input += button.textContent;
                displayContent(input);
                console.log(input);
            }
          
        }
        
        
    })
})
