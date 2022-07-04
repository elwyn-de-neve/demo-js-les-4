const ages = [4, 6, 13];

// Schrijf alle leeftijden om naar honden-jaren:
const output = ages.map(
    ( age ) => {
        return age * 7;
    }
);

console.log(output);