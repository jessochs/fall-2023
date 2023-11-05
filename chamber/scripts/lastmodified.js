document.querySelector("#last-updated").textContent = document.lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    
});
// light/dark mode
const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});

const today = new Date();
document.querySelector('#year').textContent = today.getFullYear();
document.querySelector("#time").textContent = today.getDate();

document.addEventListener('DOMContentLoaded', function () {
	const daysElement = document.querySelector(".visitor");
	const lastVisitDate = localStorage.getItem('lastVisitDate');

	if (!lastVisitDate) {
		daysElement.textContent = 'Welcome! Let us know if you have any questions.';

	}
	else {
		const storedDate = new Date(lastVisitDate);
		const difference = today - storedDate;
		const dayDiff = Math.floor(difference / (1000 * 60 * 60 * 24));

		if (dayDiff === 1) {
			daysElement.textContent = 'You last visited 1 day ago';
		} 
		else if (dayDiff < 1) {
			daysElement.textContent = "Back so soon! Awesome!";
		}
		else {
			daysElement.textContent = "You last visited ${dayDiff} days ago";
		}
	}
	localStorage.setItem('lastVisitDate', today.toString());
})

// const visits = document.querySelector("#visits");
// let lastVisit = window.localStorage.getItem("lastVisit");
// let daysSinceLastVisit;


// if (lastVisit) {

//     lastVisit = new Date(lastVisit);
//     const timeDifference = new Date() - lastVisit;

//     daysSinceLastVisit = Math.round(timeDifference / (24 * 60 * 60 * 1000));
  
//     console.log(daysSinceLastVisit)
  
//   } else {
  
//     daysSinceLastVisit = 0;
  
//   }