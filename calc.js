let total = 0;
let buffer = "0";
let previous;

const screen = document.querySelector('.screen');

function buttonClick(value){
    if(isNaN(value)){
        handleSymbol(value);
    }

    else{
        handleNumber(value);
    }
    screen.innerText = buffer;

}

function handleSymbol (symbol){
    switch(symbol){
        case 'C':
            buffer = '0';
            total = 0;
            break;

        case '=':
            if(previous === null){
                return
            }

            flushOperation(parseInt(buffer));
            previous = null;
            buffer = total;
            total = 0;
            break;

        case '×':
        case '+':
        case '−':
        case '÷':

            handleMath(symbol);
            break;
    }
}

function handleMath(symbol){
    if(buffer === '0'){
        return;
    }

    const intBuffer = parseInt(buffer);

    if(total === 0){
        total = intBuffer;
    }

    else{
        flushOperation(intBuffer);
    }

    previous = symbol;
    buffer = '0';
}

function flushOperation(intBuffer){
    if(previous === '+'){
        total += intBuffer;
    }

    else if(previous === '−'){
        total -= buffer;
    }

    else if(previous === '×'){
        total *= buffer;
    }

    else if(previous === '÷'){
        total /= buffer;
    }
}

function handleNumber(numberString){
    if(buffer === "0"){
        buffer = numberString;
    }

    else{
        buffer += numberString;
    }
}

function init(){
    document.querySelector('.calc-buttons').addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })

}

init();