const bc = typeof BroadcastChannel !== 'undefined' ? new BroadcastChannel('remote_page') : null;

function sendMessage(cmd, value) {
    if (!bc) return;
    bc.postMessage({ type: cmd, payload: value });
}

function getElements() {
    return {
        listOfNames: document.getElementById('names'),
        nameField: document.getElementById('nameField')
    };
}

function addNewName() {
    const { listOfNames, nameField } = getElements();
    if (!listOfNames || !nameField) {
        console.warn('Missing element: #names or #nameField not found');
        return;
    }
    const value = nameField.value.trim();
    if (!value) return;
    const newOption = new Option(value, value);
    listOfNames.add(newOption);
    listOfNames.value = value;
    sendMessage('ADD_NAME', value);
    nameField.value = '';
}

function add() {
    const { listOfNames } = getElements();
    if (!listOfNames) { console.warn('Missing element: #names'); return; }
    sendMessage('ADD_POINT', listOfNames.value);
}

function subtract() {
    const { listOfNames } = getElements();
    if (!listOfNames) { console.warn('Missing element: #names'); return; }
    sendMessage('SUBTRACT_POINT', listOfNames.value);
}