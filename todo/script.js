document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('input');
    const addButton = document.getElementById('add');
    const taskList = document.getElementById('list');

    addButton.addEventListener('click', function() {
        const taskText = inputField.value;

        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = taskText;
            taskList.appendChild(listItem);
            inputField.value = '';
        }
    });
});