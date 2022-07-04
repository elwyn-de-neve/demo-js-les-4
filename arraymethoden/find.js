// Ik wil de gebruikersinformatie van piet!
const users = [
    { id: 1, username: 'henk' },
    { id: 2, username: 'piet' },
    { id: 3, username: 'klaas' },
];

const findOutput = users.find((user) => {
    console.log(user.username === 'piet');
    return user.username === 'piet';
});

console.log(findOutput.username);