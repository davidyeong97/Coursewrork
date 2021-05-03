let input = 'Hi, Human'

let vowels = ['a', 'e', 'i', 'o', 'u']
let resultArray = []

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        if (input[i] === vowels[j]) {
            if (input[i] === 'e') {
                resultArray.push('ee')
            }
            if (input[i] === 'u') {
                resultArray.push('uu')
            } else
                resultArray.push(vowels[j])
        }
    }
}
console.log(resultArray.join('').toUpperCase());