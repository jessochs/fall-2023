const rentalUrl = "https://jessochs.github.io/wdd230/final/data/info.json";
const tables = document.querySelector('#display');

const displayRentals = (rentals) => {
    let table = document.createElement('table');
    // let theHead = document.createElement('thead');
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

        table.appendChild(row);


    });
    
}

async function getRentalData() {
    const response = await fetch(rentalUrl);
    const data = await response.json();

    displayRentals(data.rentals);
}

getRentalData();

