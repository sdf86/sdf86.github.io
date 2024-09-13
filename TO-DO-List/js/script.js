let tasks = ['Eat', 'Code', 'Exercice', 'Go to work'];
let ul = document.getElementById('todo-list');

for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(task));
        ul.appendChild(li);
    }



    