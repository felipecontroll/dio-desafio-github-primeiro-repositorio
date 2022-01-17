// inicio script contador 

let count = 0;
var input = document.querySelector('[name="adicionar"]');

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;

    if (count >= 0) {
       document.getElementById('currentNumber').style.color = 'black';
    }
    if (count > 5){
        input.setAttribute('disabled', true);
    } 
   }

function decrement() {
    count--;
    CURRENT_NUMBER.innerHTML = count;
    if (count < 0) {
        document.getElementById('currentNumber').style.color = 'red';
    } else {
        document.getElementById('currentNumber').style.color = 'black';
    }
    if (count < 6) {
        input.removeAttribute('disabled');
    }
}

function test() {
	kdowkdpo;
}
// fim script contador 

// inicio script da lista 
const form = document.getElementById('task-form');
const taskList = document.getElementById('tasks');

form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('task-input');
	addTask(inputField.value);
	form.reset();
};

function addTask(description) {
	const taskContainer = document.createElement('div');
	const newTask = document.createElement('input');
	const taskLabel = document.createElement('label');
	const taskDescriptionNode = document.createTextNode(description);

	newTask.setAttribute('type', 'checkbox');
	newTask.setAttribute('name', description);
	newTask.setAttribute('id', description);

	taskLabel.setAttribute('for', description);
	taskLabel.appendChild(taskDescriptionNode);

	taskContainer.classList.add('task-item');
	taskContainer.appendChild(newTask);
	taskContainer.appendChild(taskLabel);

	taskList.appendChild(taskContainer);
}

// fim script da lista 

// consumir o api catapi para troca de imgs de gatos

const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');

const getCats = async () => {
	try {
		const data = await fetch(BASE_URL);
	const json = await data.json();

	return json.webpurl;
	} catch (e) {
		console.log(e.message);
	}
};

const loadImg = async () => {
	catImg.src = await getCats();
}

catBtn.addEventListener('click', loadImg);

loadImg();



  function changeMode() {
			changeClasses();
	changeText();
}

function changeClasses() {
	button.classList.toggle(darkModeClass);
	h1.classList.toggle(darkModeClass);
	body.classList.toggle(darkModeClass);
//	footer.classList.toggle('dark-mode');
}

 function changeText() {
 	const lightMode = 'Light Mode';
 	const darkMode = 'Dark Mode';

 	if (body.classList.contains(darkModeClass)) {
 		button.innerHTML = lightMode;
 		h1.innerHTML = darkMode + ' ON';
 		return;
 	}

 	button.innerHTML = darkMode;
	 bt.innerHTML = darkMode;
 	h1.innerHTML = lightMode + ' ON';
 }

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
//const footer = document.getElementsByTagName('footer');
const bt = document.getElementsByName('adicionar');

button.addEventListener('click', changeMode);