
let day = new Date();
let weekday = day.getDay();
let message;

if (weekday >=1 && weekday <= 3) {
	
	message = " 🤝🏼 Please join us for the Chamber Meet and Greet on Wednesday at 7:00 pm."
	document.querySelector("#message").textContent = message;
} 
 
let closeButton = document.createElement("button");
closeButton.textContent = "X";
closeButton.classList.add("close-button");

closeButton.addEventListener('click', function() {
	let removeBanner = document.querySelector("#remove-banner");
	removeBanner.remove();
	bannerElement.style.display = 'none'
});

let bannerElement = document.querySelector("#banner");
bannerElement.appendChild(closeButton);



