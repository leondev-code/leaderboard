const listOfNames = document.getElementById("names");
const nameField = document.getElementById("nameField");
const bc =  new BroadcastChannel('remote_page');
window.open("leaderboard.html","_blank");
function sendMessage(cmd, value) {
     bc.postMessage({type:cmd, payload:value});
}
function addNewName() {
    const newName = document.createElement("option");
    newName.innerHTML=nameField.value;
    newName.value=nameField.value;
    listOfNames.appendChild(newName);
    listOfNames.value=nameField.value;
    sendMessage('ADD_NAME', nameField.value);
    nameField.value='';
}
function add() {
    sendMessage('ADD_POINT', listOfNames.value)
}
function subtract() {
    sendMessage('SUBTRACT_POINT', listOfNames.value)
}