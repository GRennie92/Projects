const calculator ={
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null
}

function updateResult(){
    const result = document.querySelector('.result');
    result.value = calculator.displayValue;
}

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) =>{
    const { target } = event;
    if(!target.matches('button')){
        return;
    }

    if(target.classList.contains('operator')){
        console.log('operator', target.value);
        return;
    }

    if (target.classList.contains('decimal')) {
        console.log('decimal', target.value);
        return;
      }
    
      if (target.classList.contains('all-clear')) {
        console.log('clear', target.value);
        return;
      }
    
      console.log('digit', target.value);
    });
