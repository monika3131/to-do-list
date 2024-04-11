var activitiesList = [];

var inputElement = document.getElementById("input");

var todoListElement = document.getElementById("todolist");

document.getElementById("button").onclick = click;

function click() {
    activitiesList.push(inputElement.value);
    console.log(activitiesList);
    inputElement.value = "";
    showList();
}

function showList() {
    todoListElement.innerHTML = " ";
    activitiesList.forEach(function (activity, index) {
        todoListElement.innerHTML +=
            "<li>" +
            activity +
            "<a onclick='editItem(" +
            index +
            ")'>Edit</a>" +
            "<a onclick='deleteItem(" +
            index +
            ")'>&times; | </a></li>";
    });
}
function editItem(index) {
    var newValue = prompt("Insert your new value");
    activitiesList.splice(index, 1, newValue);
    showList();
}
function deleteItem(index) {
    activitiesList.splice(index, 1);
    showList();
}


