const input = document.querySelector('#addToDo');
const ul = document.querySelector('ul');
const e = 0

ul.addEventListener('click', function(e) {
    if (e.target.classList.contains('fa-trash')) {
        e.target.closest('li').remove();
    }
});

input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        addToDO()
        input.value = ''
    }
});

function addToDO() {
    if (input.value == '') {
        return
    } 
    const li = document.createElement('li');
    li.innerHTML = `<span><i class="fa fa-trash"></i></span> ${input.value}`
    ul.appendChild(li);

    console.log("Tarefa adicionada:", li)
}
