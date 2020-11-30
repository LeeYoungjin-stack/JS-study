const toDoForm= document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

const toDos = []; 

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos);
}

//자바스크립트 object를 string으로바꿔줌 jsonstringify

function paintToDo(text){
    const li = document.createElement("li")
    const delBtn = document.createElement("button");
    delBtn.value = "XXXXXX";
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerText = text
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDOObj = {
        text: text,
        id: newId
    };

    toDos.pust(toDoObj); //array(todos) 안에 element(todoObj)넣을수있음
    saveToDos()
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value == "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null){
        console.log(loadedToDos);
        const parsedToDos = JSON.parse(loadedToDos);
        console.log(parsedToDos);

    }
}


    function init(){

        loadToDos();
        toDoForm.addEventListener("submit", handleSubmit)
    }

    init();