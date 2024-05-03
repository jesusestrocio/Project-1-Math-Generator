// import './styles/modern-normalize.css'
// import './styles/style.css'

// User Clicks One of the Arithmetic Operator Buttons

const add = document.querySelector('.addition');
const subtract = document.querySelector('.subtraction');
const multiply = document.querySelector('.multiplication');
const divide = document.querySelector('.division');

const dynamicPopUpFormTitle = document.querySelector('.title-for-pop-up-form')


document.querySelector('.addition').addEventListener('click', () => {
	dynamicPopUpFormTitle.textContent = 'Addition';
	document.querySelector('.question-section').style.display = 'none';
	dictionaryOfProblemsGenerated = {};
	openPopUpForm()
})
document.querySelector('.subtraction').addEventListener('click', () => {
	dynamicPopUpFormTitle.textContent = 'Subtraction';
	document.querySelector('.question-section').style.display = 'none';
	openPopUpForm()
})

document.querySelector('.multiplication').addEventListener('click', () => {
	dynamicPopUpFormTitle.textContent = 'Multiplication';
	document.querySelector('.question-section').style.display = 'none';
	openPopUpForm()
})

document.querySelector('.division').addEventListener('click', () => {
	dynamicPopUpFormTitle.textContent = 'Division';
	document.querySelector('.question-section').style.display = 'none';
	openPopUpForm()
})

function openPopUpForm() {
	document.getElementById("pop-up-window-id").style.display = "block";
	document.querySelector(".no-of-digits-input").value = '';
	document.querySelector(".no-of-problems-input").value = '';
}

function closePopUpForm() {
	document.getElementById("pop-up-window-id").style.display = "none";
	document.querySelector(".no-of-digits-input").value = '';
	document.querySelector(".no-of-problems-input").value = '';
}

function userInputValidation(numberOfDigits, numberOfProblems) {
	const minDigits = 1,
		maxDigits = 5;
	const minProblems = 1,
		maxProblems = 20;
	if ((numberOfDigits > minDigits || numberOfDigits < maxDigits) ||
		(numberOfProblems > minProblems || numberOfProblems < maxProblems)) {
		console.log('Error')

	} else {
		console.log("Return Execution")
		return true
	}
}


{
	/* <input type="radio" id="automatic-id" name="" value="automatic">
	<label for="automatic">Automatic Timer</label><br>
	<input type="radio" id="manual-id" name="" value="manual">
	<label for="manual">Manual Timer</label><br> */
}




// When Generate Button On The Pop Form Is Clicked 
document.querySelector(".generate-form-button").addEventListener('click', () => {

	const noOfDigitsInput = document.querySelector(".no-of-digits-input").value
	const noOfProblemsInput = document.querySelector(".no-of-problems-input").value
	const dynamicPopUpFormTitle = document.querySelector('.title-for-pop-up-form').innerHTML
	console.log('This is what the output is for the arithemthic symbols ', dynamicPopUpFormTitle)

	// const automaticTimer = document.querySelector('automatic-id').value 
	// // const manualTimer = document.querySelector('manual-id').value 

	// console.log(automaticTimer, manualTimer, 'Timer radio button')
	// console.log(automaticTimer, 'Timer radio button')



	console.log(noOfDigitsInput, noOfDigitsInput)
	console.log(typeof noOfdigits, typeof noOfProbelms)

	userInputValidation(+noOfDigitsInput, +noOfProblemsInput)

	generateQuestions(+noOfDigitsInput, +noOfProblemsInput, dynamicPopUpFormTitle);

	closePopUpForm()
});

const dictionaryOfDigitsAvailable = {
	1: 1,
	2: 10,
	3: 100,
	4: 1000,
	5: 10000,
};

// const dictionaryOfProblemsGenerated = {};
let dictionaryOfProblemsGenerated = {};



function generateQuestions(noOfDigitsInput, noOfProblemsInput, dynamicPopUpFormTitle) {

	let min = dictionaryOfDigitsAvailable[noOfDigitsInput]
	let max = dictionaryOfDigitsAvailable[noOfDigitsInput + 1]
	console.log('This is what the output is for the arithemthic symbols ', dynamicPopUpFormTitle)

	if (dynamicPopUpFormTitle == 'Addition') {
		for (let i = 0; i < noOfProblemsInput; i++) {
			const fistNumber = getRandomArbitrary(min, max);
			const secondNumber = getRandomArbitrary(min, max);
			const addSign = "+"
			const answer = fistNumber + secondNumber
			console.log(fistNumber, secondNumber, answer)
			dictionaryOfProblemsGenerated[i] = [fistNumber, secondNumber, answer, addSign];
			console.log(dictionaryOfProblemsGenerated, 'a simple print of the dictofproblems ds after the loop has ended')
		}
	} else if (dynamicPopUpFormTitle == 'Subtraction') {
		for (let i = 0; i < noOfProblemsInput; i++) {
			const fistNumber = getRandomArbitrary(min, max);
			const secondNumber = getRandomArbitrary(min, max);
			const subSign = "-"
			if (fistNumber < secondNumber) {
				const answer = secondNumber - fistNumber
				dictionaryOfProblemsGenerated[i] = [secondNumber, fistNumber, answer, subSign];
				console.log(fistNumber, secondNumber, answer)
			} else {
				const answer = fistNumber - secondNumber
				dictionaryOfProblemsGenerated[i] = [fistNumber, secondNumber, answer, subSign];
				console.log(fistNumber, secondNumber, answer)
			}
			console.log(dictionaryOfProblemsGenerated, 'a simple print of the dictofproblems ds after the loop has ended')
		}
	} else if (dynamicPopUpFormTitle == 'Multiplication') {
		for (let i = 0; i < noOfProblemsInput; i++) {
			const fistNumber = getRandomArbitrary(min, max);
			const secondNumber = getRandomArbitrary(min, max);
			const multiplySign = "X"


			const answer = fistNumber * secondNumber
			console.log(fistNumber, secondNumber, answer)
			dictionaryOfProblemsGenerated[i] = [fistNumber, secondNumber, answer, multiplySign];
			console.log(dictionaryOfProblemsGenerated, 'a simple print of the dictofproblems ds after the loop has ended')
		}
	} else if (dynamicPopUpFormTitle == 'Division') {
		for (let i = 0; i < noOfProblemsInput; i++) {
			const fistNumber = getRandomArbitrary(min, max);
			const secondNumber = getRandomArbitrary(min, max);
			const divideSign = "/"

			if (fistNumber < secondNumber) {
				const answer = secondNumber / fistNumber
				dictionaryOfProblemsGenerated[i] = [secondNumber, fistNumber, answer, divideSign];
				console.log(fistNumber, secondNumber, answer)
			} else {
				const answer = fistNumber / secondNumber
				dictionaryOfProblemsGenerated[i] = [fistNumber, secondNumber, answer, divideSign];
				console.log(fistNumber, secondNumber, answer)
			}
			console.log(dictionaryOfProblemsGenerated, 'a simple print of the dictofproblems ds after the loop has ended')
		}
	}

	// IF 
	let radioButtons = document.querySelectorAll('.radio-button');
	console.log(radioButtons, 'printing radio buttons')
	let radioAutomatic = radioButtons[0].checked
	let radioManual = radioButtons[1].checked

	console.log(radioAutomatic, radioManual, 'spreading operator')

	if (radioAutomatic) {
		renderProblemList2()
		// display the timer function 
		document.querySelector('.timer-section').style.display = 'block';
		document.querySelector('.stopwatch-start-button').style.display = 'none';
		document.querySelector('.stopwatch-stop-button').style.display = 'none';
		document.querySelector('.stopwatch-reset-button').style.display = 'none';
		startStopwatch()

	}
	if (radioManual) {
		// renderProblemList(dictionaryOfProblemsGenerated)
		renderProblemList()

		// display the timer function 
		document.querySelector('.timer-section').style.display = 'block';


	}

};

function getRandomArbitrary(min, max) {
	return Math.floor(Math.random() * (max - min) + min)
};


function renderProblemList() {
	console.log(dictionaryOfProblemsGenerated, 'why do I need to pass the dictionary of questions, I have made this a global object')

	let dynamicTimerAndQuestionsContainer = '';

	for (let i = 0; i < Object.keys(dictionaryOfProblemsGenerated).length; i++) {
		let firstNumber = dictionaryOfProblemsGenerated[i][0]
		let secondNumber = dictionaryOfProblemsGenerated[i][1]
		let symbol = dictionaryOfProblemsGenerated[i][3]

		const html = `
        <div class='individual-question-container'>
            <div class='first-number'><p class="first-number-dynamic-input">${firstNumber}</p></div> 
            <div class='symbol'><p class="symbol-dynamic-input">${symbol}</p></div>
            <div class='second-number'><p class="second-number-dynamic-input">${secondNumber}</p></div>
            <div class='user-input-section'><input type="number" class="user-input-value" id="user-input-value-id" required></div>
            <div class='user-input-button-section'><button class="user-input-validation-button" id="user-input-validation-button-id">Check</button></div>
        </div>
                    `;

		dynamicTimerAndQuestionsContainer += html;
	}
	document.querySelector('.question-section').style.display = 'flex';
	document.querySelector('.question-section').innerHTML = dynamicTimerAndQuestionsContainer;


	document.querySelectorAll('.user-input-validation-button').forEach((individualCheckButton, index) => {
		console.log(individualCheckButton, index);
		const usersAnswer = document.querySelectorAll('.user-input-value')

		individualCheckButton.addEventListener('click', () => {
			console.log('Got it', index)
			console.log(usersAnswer)
			console.log(usersAnswer[index].value)
			console.log(typeof usersAnswer[index].value)
			console.log(dictionaryOfProblemsGenerated[index][0])
			console.log(dictionaryOfProblemsGenerated[index][1])
			console.log(dictionaryOfProblemsGenerated[index][2])
			console.log(typeof dictionaryOfProblemsGenerated[index][2])


			if (+usersAnswer[index].value === dictionaryOfProblemsGenerated[index][2]) {
				console.log('GREEN')
				usersAnswer[index].style.backgroundColor = 'green';
				// globalCount = globalCount + 1;
			} else {
				console.log("RED")
				usersAnswer[index].style.backgroundColor = 'red';
			}

		})
	});


	// printOutAllAnswersWhenPrinting(dictionaryOfProblemsGenerated)

}


function renderProblemList2() {
	console.log(dictionaryOfProblemsGenerated, 'why do I need to pass the dictionary of questions, I have made this a global object')

	let dynamicTimerAndQuestionsContainer = '';

	for (let i = 0; i < Object.keys(dictionaryOfProblemsGenerated).length; i++) {
		let firstNumber = dictionaryOfProblemsGenerated[i][0]
		let secondNumber = dictionaryOfProblemsGenerated[i][1]
		let symbol = dictionaryOfProblemsGenerated[i][3]

		const html = `
        <div class='individual-question-container'>
            <div class='first-number'><p class="first-number-dynamic-input">${firstNumber}</p></div> 
            <div class='symbol'><p class="symbol-dynamic-input">${symbol}</p></div>
            <div class='second-number'><p class="second-number-dynamic-input">${secondNumber}</p></div>
            <div class='user-input-section'><input type="number" class="user-input-value" id="user-input-value-id" required></div>
        </div>
                    `;

		dynamicTimerAndQuestionsContainer += html;
	}

	const checkAllButton = `
    <button type="button" class="check-all-button" onclick="startStopwatchFunction()">Check All</button>
    `;
	dynamicTimerAndQuestionsContainer += checkAllButton;

	document.querySelector('.question-section').style.display = 'flex';
	document.querySelector('.question-section').innerHTML = dynamicTimerAndQuestionsContainer;

	document.querySelector('.check-all-button').addEventListener('click', () => {

		const usersAnswer = document.querySelectorAll('.user-input-value')
		console.log(usersAnswer, 'this should be a collection of users inputs')
		usersAnswer.forEach((userValue, index) => {
			console.log(userValue.value, index, 'Printing for each')

			if (+usersAnswer[index].value === dictionaryOfProblemsGenerated[index][2]) {
				console.log('GREEN')
				usersAnswer[index].style.backgroundColor = 'green';
			} else {
				console.log("RED")
				usersAnswer[index].style.backgroundColor = 'red';
			}
		})
	})

	// printOutAllAnswersWhenPrinting(dictionaryOfProblemsGenerated)

}

function startStopwatchFunction() {
	console.log('stopwathc function ')

	const allUsersAnswers = document.querySelectorAll('.user-input-value')
	let count = 0

	allUsersAnswers.forEach((userValues, index) => {
		console.log(allUsersAnswers.length, 'is this the length')
		if (+allUsersAnswers[index].value === dictionaryOfProblemsGenerated[index][2]) {
			console.log('right')
			count += 1
			console.log('count', count)
			if (count === allUsersAnswers.length) {
				console.log('stopping the stop watch')
				stopStopwatch()
				displayScoreboardToUser()
				resetStopwatch()
			}
		} else {
			console.log('wrong')
			displayErrorAlertMessageToUser('Enter In All Input Fields Please')
		}

	})

}

function displayErrorAlertMessageToUser(message) {
	document.querySelector('.error-message-container').style.display = 'block';
	document.querySelector('.error-message-output').innerHTML = '';
	document.querySelector('.error-message-output').innerHTML = message;

	setTimeout(() => {
		document.querySelector('.error-message-container').style.display = 'none';

	}, 1000)

}

function displayScoreboardToUser() {
	document.querySelector('.users-scoreboard-container').style.display = 'block';

	let dynamicHTMLCreatedForScoreboard = '';
	let html = ``;

	let userDataLs = JSON.parse(localStorage.getItem('UsersData'))
	let userName = 'Jesus Estrocio'
	let numberOfQuestions = document.querySelector('.no-of-problems-input').value
	let timeTaken = document.querySelector('.stopwatch-timer').value
	for (let i = 0; i < 3; i++) {
		if (i == 0) {
			html = `<h5 class="user-scoreboard-title"> User's Scoreboard</h5> 
                <p class="users-scoreboard-output" >${(userName)}</p>`;
		}
		html = html + `
      <p class="users-scoreboard-output" >${numberOfQuestions}</p>
      <p class="users-scoreboard-output" >${timeTaken}</p>
      `;
	}

	dynamicHTMLCreatedForScoreboard = html;
	console.log(dynamicHTMLCreatedForScoreboard)

	document.querySelector('.users-scoreboard-container').innerHTML = '';
	document.querySelector('.users-scoreboard-container').innerHTML = dynamicHTMLCreatedForScoreboard;

	setTimeout(() => {
		document.querySelector('.users-scoreboard-container').style.display = 'none';
	}, 4000)


}

// Manual Timer Function 

var startTime; // to keep track of the start time
var stopwatchInterval; // to keep track of the interval
var elapsedPausedTime = 0; // to keep track of the elapsed time while stopped

function startStopwatch() {
	if (!stopwatchInterval) {
		startTime = new Date().getTime() - elapsedPausedTime; // get the starting time by subtracting the elapsed paused time from the current time
		stopwatchInterval = setInterval(updateStopwatch, 1000); // update every second
	}
}

function stopStopwatch() {
	clearInterval(stopwatchInterval); // stop the interval
	elapsedPausedTime = new Date().getTime() - startTime; // calculate elapsed paused time
	stopwatchInterval = null; // reset the interval variable
}

function resetStopwatch() {
	stopStopwatch(); // stop the interval
	elapsedPausedTime = 0; // reset the elapsed paused time variable
	document.getElementById("stopwatch-timer-id").innerHTML = "00:00:00"; // reset the display
}

function updateStopwatch() {
	var currentTime = new Date().getTime(); // get current time in milliseconds
	var elapsedTime = currentTime - startTime; // calculate elapsed time in milliseconds
	var seconds = Math.floor(elapsedTime / 1000) % 60; // calculate seconds
	var minutes = Math.floor(elapsedTime / 1000 / 60) % 60; // calculate minutes
	var hours = Math.floor(elapsedTime / 1000 / 60 / 60); // calculate hours
	var displayTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds); // format display time

	document.getElementById("stopwatch-timer-id").innerHTML = ''; // update the display
	document.getElementById("stopwatch-timer-id").innerHTML = displayTime; // update the display
}

function pad(number) {
	// add a leading zero if the number is less than 10
	return (number < 10 ? "0" : "") + number;
}