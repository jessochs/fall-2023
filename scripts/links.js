const url = 'https://jessochs.github.io/wdd230/';
const urlLink = "https://jessochs.github.io/wdd230/data/links.json"

const displayLinks = (weeks) => {
    const rows = document.querySelector('div.cards');

    weeks.forEach((week) => {
        let row = document.createElement('ul');
        let line = document.createElement('li');
        let lesson = document.createElement('a');
        let link = document.createElement('a');

        lesson.textContent = `${week.lesson}`;
        link.setAttribute('href', week.url);
        link.setAttribute('a', week.title);

        row.appendChild(link);
        row.appendChild(lesson);
        row.appendChild(line);
        rows.appendChild(row);


    });
}


async function getLinks() {
    const response = await fetch(urlLink);
    const data = await response.json();
    // console.log(data);
    displayLinks(data);
  }
  
  getLinks();