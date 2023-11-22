
let day = new Date();
let weekday = day.getDay();
let message;

if (weekday >=1 && weekday <= 3) {
	
	message = " 🤝🏼 Please join us for the Chamber Meet and Greet on Wednesday at 7:00 pm."
	document.querySelector("#message").textContent = message;
} 
 
let deleteButton = document.createElement('button');

deleteButton.textContent = '❌';

// function displayMessage() {
//     let day = new Date();
//     let weekday = day.getDay();
//     let message;

//     if (weekday >= 1 && weekday <= 5) {
//         message = " 🤝🏼 Please join us for the Chamber Meet and Greet on Wednesday at 7:00 pm."
//         document.querySelector("#message").textContent = message;
//     }

//     let deleteButton = document.createElement('button');
//     deleteButton.textContent = '❌';
//     deleteButton.classList.add('delete');
//     message.append(deleteButton);

//     deleteButton.addEventListener('click', function () {
//         message.removeChild(message)
//         // deleteChapter(scripture.textContent);
//         input.focus();
        
//     })

