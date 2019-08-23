function hideSuggestion(id) {
    document.getElementById(id).style.display = 'none';
}

function getFilteredValue(value) {
    return obj.filter((todo) => {
        return todo.title.includes(value);
    })
}


function showSuggestion(value) {
    document.getElementById('populate-items').innerHTML = '';
    let ans = getFilteredValue(value);
    for (let i = 0; i < ans.length && i < 10; i++) {
        let ele = `<li class="pop-item">${ans[i].title}</li>`;
        document.getElementById('populate-items').innerHTML += ele;
    }
    document.getElementById('auto-populate').style.display = 'block';
}

function renderElement() {
    document.getElementById('todo-items').innerHTML = '';
    for (let i = 0; i < obj.length && i < 10; i++) {
        let body = `<tr id='todo-${i+1}'>` +
            '<td>' + `${i+1}` + '</td>' +
            '<td>' + `${obj[i].title}` + '</td>' +
            `<td>
                <a href="#" class="action" id="edit-${i+1}" onclick=editElement(${i})>Edit /</a>
                <a href="#" class="action" id="del-${i+1}" onclick=delElement(${i})>Delete</a>
            </td>` +
            '</tr>';
        document.getElementById('todo-items').innerHTML += body;
    }
}

function editElement(id) {
    let updatedValue = prompt("Enter new value");
    if (updatedValue === '' || updatedValue === null || updatedValue == undefined)
        return;
    obj[id].title = updatedValue;
    renderElement();
}

function addElement() {
    value = document.getElementById('search-input').value;
    if (value === '') return;
    let newObj = {
        id: obj.length,
        title: value,
        completed: false,
        userId: "1"
    };
    obj.unshift(newObj);
    renderElement();
}

function delElement(id) {
    obj.splice(id, 1);
    renderElement();
}

window.onload = () => {
    renderElement();
}

function changeTab(id) {
    var tabs = document.getElementsByClassName('main-body');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none'
    }
    document.getElementById(id + '-content').style.display = 'block';
}