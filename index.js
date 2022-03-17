const tasks = [
  { text: 'Buy milk', done: false, id: 1 },
  { text: 'Pick up Tom from airport', done: false, id: 2 },
  { text: 'Visit party', done: false, id: 3 },
  { text: 'Visit doctor', done: true, id: 4 },
  { text: 'Buy meat', done: true, id: 5 },
];

const listElem = document.querySelector('.list');

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', id);
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};
renderTasks(tasks);

let newClick = document.querySelector('.create-task-btn');
function addTask() {
  let inputElem = document.querySelector('.task-input').value;
  if (inputElem == '') {
    return null;
  } else {
    let temp = {};
    temp.text = inputElem;
    temp.done = false;
    temp.id = tasks.length + 1;
    tasks.push(temp);
    listElem.innerHTML = null;
    renderTasks(tasks);
    inputElem = '';
  }
}
newClick.addEventListener('click', addTask);

let checkbox = document.querySelector('input[name=checkbox]');
function checkboxTrue() {
  let dataId = this.input.dataset.id;
  tasks.filter((task) => task.id === dataId).map((task) => (task.done = true));
}

checkbox.addEventListener('click', checkboxTrue);
