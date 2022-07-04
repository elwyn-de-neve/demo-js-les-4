const words = ['apple', 'house', 'table'];

// ik wil alleen woorden overhouden met "le" erin
const filterOutput = words.filter((word) => {
    return word.includes('le');
});

console.log(filterOutput);