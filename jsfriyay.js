//Return pair of values that sum to 0 and return them
const initialFunction = [-6, -3, -2, -1, 0, 3, 4, 5, 8, 9]
const pairPicker = () => {
for (let i = 0; i < initialFunction.length; i++){
    for (let j = 1; j < initialFunction.length; j++){
        if(initialFunction[i] + initialFunction[j] === 0){
            return [initialFunction[i], initialFunction[j]]
        }
    }
}
}

console.log(pairPicker())

