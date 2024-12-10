function capitalize(str) {
    if (!str) return str;
    return str[0].toUppercase() + str.slice(1);
}
module.exports = capitalize;

function reverseString(str) {
    return str.split('').reverse().join('');
}
module.exports = reverseString;


const calculator ={
    add : (a,b) => a + b,
    subtract : (a, b) => a - b,
    multiply : (a, b) => a * b,
    divide : (a, b) =>{
        if (b === 0) throw new Error('cannot divide by zero');
        return a / b;
    }

};
module.exports = calculator;


function ceaserCipher(str, shift) {
    const shiftChar= (char, shift) =>{
        const base = cahr === char.toLowerCase()? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
        return String.fromCharCode(((charCodeAt(0)- base + shift)%26)+base);
    };
    return str
        .split('')
        .map(char=> (/[a-zA-Z]/.test(char) ? shiftChar(char, shift) : char))
        .join('');
}
module.exports = ceaserCipher;



function analyzeArray(arr) {
    const average = arr.reduce((sum, num)=> sum+num, 0)/ arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return{
        average,
        min,
        max,
        length:arr.length
    };
}
module.exports = analyzeArray;
