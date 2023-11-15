const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';


const displayProphets = (prophets) => {
const cards = document.querySelector("#cards");
    
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let bday = document.createElement('p');
        let birthPlace = document.createElement('p');
        let portrait = document.createElement('img');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        bday.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Place of birth: ${prophet.birthplace}`
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.append(bday);
        card.append(birthPlace);
        card.appendChild(portrait);

        cards.appendChild(card);

    });
}

    async function getProphetData() {
        const response = await fetch(url);
        const data = await response.json();
        // console.table(data.prophets);
        displayProphets(data.prophets);
    }
    
    getProphetData();
