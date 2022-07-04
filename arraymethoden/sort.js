// gebruikers sorteren op leeftijd van laag naar hoog
const clients = [
    { name: 'henk', age: 3 },
    { name: 'piet', age: 33 },
    { name: 'anne', age: 28 },
];

clients.sort((a, b) => {
    // a.age vergelijken met b.age
    if (a.age > b.age) {
        return 1;
    } else if (a.age < b.age) {
        return -1;
    } else {
        return 0;
    }
});


// clients.sort((a, b) => a.age - b.age );



console.log(clients);

