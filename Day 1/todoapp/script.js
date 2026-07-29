// =============================
// let & const
// =============================
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let todos = [];

// =============================
// Class
// =============================
class Todo{

    constructor(text){
        this.id = Date.now();
        this.text = text;
    }

}

// =============================
// Arrow Function
// =============================
const createTaskElement = ({id, text}) => {

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${text}</span>
        <button class="delete">Hapus</button>
    `;

    li.querySelector("button").addEventListener("click",()=>{

        todos = todos.filter(todo=>todo.id !== id);

        renderTodos();

    });

    return li;

};

// =============================
// Template Literal
// =============================
const renderTodos = () => {

    taskList.innerHTML = "";

    todos.forEach(todo=>{

        console.log(`Menampilkan tugas: ${todo.text}`);

        taskList.appendChild(createTaskElement(todo));

    });

};

// =============================
// Promise
// =============================
const saveTodo = (todo)=>{

    return new Promise((resolve)=>{

        setTimeout(()=>{

            resolve(todo);

        },500);

    });

};

// =============================
// Async Await
// =============================
const addTodo = async()=>{

    const text = taskInput.value.trim();

    if(text==="") return;

    const todo = new Todo(text);

    await saveTodo(todo);

    todos.push(todo);

    renderTodos();

    taskInput.value="";

};

addBtn.addEventListener("click",addTodo);

taskInput.addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){

        addTodo();

    }

});

// =============================
// Destructuring
// =============================
const mahasiswa = {

    nama:"Nashiruddin",
    kelas:"XI SIJA"

};

const {nama, kelas} = mahasiswa;

console.log(nama);
console.log(kelas);

// =============================
// Spread Operator Array
// =============================
const angka1 = [1,2,3];
const angka2 = [4,5,6];

const semuaAngka = [...angka1,...angka2];

console.log(semuaAngka);

// =============================
// Spread Operator Object
// =============================
const obj1 = {

    a:1,
    b:2

};

const obj2 = {

    c:3,
    d:4

};

const gabungan = {

    ...obj1,
    ...obj2

};

console.log(gabungan);