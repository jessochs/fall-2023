const rentalUrl = "https://jessochs.github.io/wdd230/final/data/info.json";
const tables = document.querySelector('#display');

const displayRentals = (rentals) => {
    let table = document.createElement('table');
    let theHead = document.createElement('thead');
    let headSection = document.createElement('tr');
    let title = document.createElement('th')
    let rowTitle = document.createElement('tr');
    let gap = document.createElement('th')
    let reserve = document.createElement('th');
    let walkin = document.createElement('th');

    let special = document.createElement('tr');
    let rentalType = document.createElement('th');
    let maxp = document.createElement('th');
    let resHalf = document.createElement('th');
    let resFull = document.createElement('th');
    let walkHalf = document.createElement('th');
    let walkFull = document.createElement('th');

    

    title.textContent = 'Max Pricing';
    title.setAttribute('colspan', '6')

    gap.textContent = '';
    gap.setAttribute('colspan', '2')
    
    reserve.textContent = 'Reservation';
    reserve.setAttribute('colspan', '2');
    walkin.textContent = 'Walk-In'
    walkin.setAttribute('colspan', '2');

    rentalType.textContent = 'Rental Type';
    maxp.textContent = 'Max. Persons';
    resHalf.textContent = 'Half Day (3 hrs)';
    resFull.textContent = 'Full Day';
    walkHalf.textContent = 'Half Day (3 hrs)';
    walkFull.textContent = 'Full Day';

    headSection.appendChild(title);
    theHead.appendChild(headSection);
    // table.appendChild(theHead);

    rowTitle.appendChild(gap);
    rowTitle.appendChild(reserve);
    rowTitle.appendChild(walkin);
    theHead.appendChild(rowTitle);

    special.appendChild(rentalType);
    special.appendChild(maxp);
    special.appendChild(resHalf);
    special.appendChild(resFull);
    special.appendChild(walkHalf);
    special.appendChild(walkFull);
    theHead.appendChild(special);

    table.appendChild(theHead);

    let body = document.createElement('tbody');
    
    
    rentals.forEach((rental) => {
        let row = document.createElement('tr');
        let type = document.createElement('td');
        let people = document.createElement('td');
        let res1 = document.createElement('td');
        let res2 = document.createElement('td');
        let walk1 = document.createElement('td');
        let walk2 = document.createElement('td');

        type.textContent = rental.type;
        people.textContent = rental.persons;
        res1.textContent = rental.reservationHalf;
        res2.textContent = rental.reservationFull;
        walk1.textContent = rental.walkHalf;
        walk2.textContent = rental.walkFull;

        row.appendChild(type);
        row.appendChild(people);
        row.appendChild(res1);
        row.appendChild(res2);
        row.appendChild(walk1);
        row.appendChild(walk2);

        body.appendChild(row);
        table.appendChild(body);
        tables.appendChild(table);


    });
    
}

async function getRentalData() {
    const response = await fetch(rentalUrl);
    const data = await response.json();

    displayRentals(data.rentals);
}

getRentalData();

