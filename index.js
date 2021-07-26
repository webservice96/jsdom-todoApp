var taskName = document.querySelector('.taskname');
var tasklist = document.querySelector('.tasklist');

var taskArr = [];

// render fucntion
function render(elements) {
    tasklist.innerHTML = "";
    elements.forEach(e => {
        let newEl = document.createElement('li');
        newEl.setAttribute('class', 'list-group-item');
        newEl.innerHTML = e;
        tasklist.appendChild(newEl);
    });
}

taskName.addEventListener('keyup', e => {
    if (e.which === 13 && taskName.value !== "") {
        taskArr.push(taskName.value);
        taskName.value = "";
        render(taskArr);
    }
});