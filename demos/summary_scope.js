let globalVariable = 'global';

function myFristFunction() {
    let functionVariable = 'function var';
    console.log(`Global ${globalVariable}`);
    console.log(`function ${functionVariable}`);
    
    if (true) {
        let blockVariable = 'block var';
        console.log(`Block ${blockVariable}`);
    }
    console.log(`Block ${blockVariable}`);
}

function mySecondFunction() {
    let secoundfunctionVariable = 'secoundfunction var';
    console.log(`Global ${globalVariable}`);
    console.log(`function ${secoundfunctionVariable}`);
}

myFristFunction()
mySecondFunction()

console.log(globalVariable);





