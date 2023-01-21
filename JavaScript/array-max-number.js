// Ache o maior número do array usando uma função que receça o array como argumento. Exemplo:
// function maxNumber(myArray)

let numbers = [1, 7, 39, 12, 5, 34]

function maxNumber(myArray) {
    let result = 0;
    for (let i = 0; i < myArray.length; i++) {
        const element = myArray[i];
        if (myArray[i] > result) {
            result = myArray[i]
        }     
    };
    return result;
};

console.log(`O maior valor do array é: ${maxNumber(numbers)}`);