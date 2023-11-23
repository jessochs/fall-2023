async function getBusinessData() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    // console.log(data);
    const filterData = data.businesses.filter(item=> item.membership == "Silver" || item.membership == "Gold");
    console.log(filterData);

    let spotlights = [];
    for (let i = 0; i < 3; i++) {
        let random = Math.floor(Math.random() * filterData.length);
        spotlights.push(filterData.splice(random, 1))
    }
    console.log(spotlights);
    displaySpotlight(spotlights);
}
getBusinessData();

const spotlightContainer = document.querySelector(".spotlights");

// function displaySpotlight(businesses) {
//     businesses.forEach(business => {
//         spotlightContainer.innerHTML+=`
//             <section class="spotlight">
//                 <h3>${business[0].name}</h3>
//                 <p>${business[0].phone}</p>
//                 <p>${business[0].address}</p>
//                 <a href="${business[0].website}">${business[0].website}</a>
//                 <img src="${business[0].img}" alt="photo" width="50" height="100"}>

//             </section>
            
            
//         `
//     })
function displaySpotlight (businesses) {
    

    businesses.forEach((business) => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let phone = document.createElement('p');
        let address = document.createElement('p');
        let website = document.createElement('p');
        
        let image = document.createElement('img');

        name.textContent = business[0].name;
        image.setAttribute('src', business[0].img);
        image.setAttribute('alt', 'business logo');
        image.setAttribute('width', '100');
        image.setAttribute('height', '50')
        phone.textContent = business[0].phone;
        address.textContent = business[0].address;
        website.textContent = business[0].website;
        

        card.appendChild(name);
        
        card.appendChild(phone);
        card.appendChild(address);
        card.appendChild(website);
        
        card.appendChild(image);

        spotlightContainer.appendChild(card);
    });
    
}