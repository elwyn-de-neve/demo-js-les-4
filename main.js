console.log('main is running');

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

const pageTitle = document.getElementById('title')
pageTitle.innerText = 'Studenten:'

function createElement ( arr ) {
    const list = document.getElementById('list')
    arr.map(( entry )=>{
        list.innerHTML += `
            <li class="list-item">${ entry.firstname } ${ entry.lastName }</li>
        `
    })
}

createElement( students )