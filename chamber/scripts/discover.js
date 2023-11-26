const timesVisiteds = document.querySelectorAll(".visits");

let count = Number(window.localStorage.getItem("count-jo")) || 0;

timesVisiteds.forEach((timeVisit) => {
    if(count !==0){
        timeVisit.textContent = count;
    }
    else {
        timeVisit.textContent = 'This is your first visit!'
        count = 1;
    }
});

count++;

localStorage.setItem('count-jo',count );