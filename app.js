var workoutChoose = document.querySelector('select');
var wodDisplay = document.querySelector('main');
console.log('Here\'s a hidden message 2')

let today = new Date()
let formatDate = today.toDateString()
let selectElement = document.getElementById('date')
selectElement.innerHTML = formatDate;

workoutChoose.onchange = function() {
    const workout = workoutChoose.value;
    updateDisplay(workout);
};

//New version using Fetch API
function updateDisplay(workout) {
    workout = workout.replace(" ", "");
    workout = workout.toLowerCase();
    let url = workout + '.txt';
    fetch(url).then(function(response) {
        response.text().then(function(text) {
            wodDisplay.textContent = text;
        });
    });
};
updateDisplay('Workout 1');
workoutChoose.value = 'Workout 1';

/*<!-- Old version using XHR (XMLHttpRequest)
function updateDisplay(workout) {
    workout = workout.replace(" ", "");
    workout = workout.toLowerCase();
    let url = workout + '.txt';
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'text';
    request.onload = function() {
        wodDisplay.textContent = request.response;
    };
    request.send();
};
-->*/


/*
function myFunction() {
    document.getElementById('myDropdown').classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
*/