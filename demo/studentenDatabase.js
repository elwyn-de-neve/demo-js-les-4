const students = [
    {
        id: 4,
        firstname: 'Anne',
        lastName: 'Anema',
        city: 'Utrecht',
        email: 'anne.anema@novi.nl',
        education: 'Full Stack Developer Bootcamp',
    },
    {
        id: 2,
        firstname: 'Bert',
        lastName: 'Bekkers',
        city: 'Amsterdam',
        email: 'bert.bekkers@novi.nl',
        education: 'HBO Bachelor Software Development',
    },
    {
        id: 1,
        firstname: 'Corrie',
        lastName: 'Claploper',
        city: 'Utrecht',
        email: 'corrie.claploper@novi.nl',
        education: 'HBO Bachelor Software Development',
    },
    {
        id: 3,
        firstname: 'Dennis',
        lastName: 'Dragerman',
        city: 'Zaandam',
        email: 'dennis.dragerman@novi.nl',
        education: 'Full Stack Developer Bootcamp',
    },
];


// 1. Sorteer de studenten alfabetisch op achternaam
students.sort((a, b) => {
    if (a.lastName > b.lastName) {
        return 1;
    } else if (a.lastName < b.lastName) {
        return -1;
    } else {
        return 0;
    }
})
console.log(students);


// 2. Wat is het email-adres van Corrie Claploper?
const output = students.find((student)=> {
    return student.firstname === 'Corrie' && student.lastName === 'Claploper'
})

console.log(output);


// 3. Hoeveel van onze studenten wonen in Utrecht?
const studentInUtrecht = students.filter( (student) => {
    return student.city === 'Utrecht'
} )

console.log('Er wonen ' + studentInUtrecht.length + ' studenten in Utrecht');

console.log(students);