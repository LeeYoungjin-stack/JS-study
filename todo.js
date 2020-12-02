const toDoForm= document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = []; 

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        
        return toDo.id !== parseInt(li.id);

    });
   toDos = cleanToDos
   saveToDos();
} //버튼눌렀을떄 삭제하는 함수




function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

//자바스크립트 object를 string으로바꿔줌 jsonstringify

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.value = "XXXXXX";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDOObj = {
        text: text,
        id: newId
    };

    toDos.pust(toDoObj); //array(todos) 안에 element(todoObj)넣을수있음
    saveToDos();
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
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);

        }); //foreach = array가담겨있는것들 각각에 한번씩 실행해줌 

    }
}


    function init(){

        loadToDos();
        toDoForm.addEventListener("submit", handleSubmit)
    }

    init();