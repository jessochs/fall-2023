const url = 'https://jessochs.github.io/wdd230/';
const urlLink = "https://jessochs.github.io/wdd230/data/links.json";
const lessonData = document.querySelector("#lessons")

async function getLinks() {
    const response = await fetch(urlLink);
    const data = await response.json();
    // console.log(data);
    displayLinks(data.lessons);
  }


const displayLinks = (weeks) => {
    weeks.forEach((week) => {
        
        let li = document.createElement('li');
       
        week.links.forEach((link) => {
            let lesson = document.createElement('a');
            let divider = document.createElement('span');
            divider.textContent = "|";

            lesson.textContent = link.title;
            lesson.setAttribute('href', link.url);

            li.appendChild(lesson);

            if (week.links[week.links.length - 1]!== link)
                li.appendChild(divider);

        });

        lessonData.appendChild(li);
        


    });
}

  getLinks();