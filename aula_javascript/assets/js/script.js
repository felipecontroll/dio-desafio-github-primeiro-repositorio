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