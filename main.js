// const todos = {
//     task: "taskname",
//     category: "categoryname",
//     date: "dateadded",
//     id: 0
// };

const todos=[];
const deleted =[];


let placement = document.getElementById('mainList');

function addTodo() {
    let inputVal = document.getElementById('mainValue').value;
    let inputValTwo = document.getElementById('dateValue').value;
    let inputValThree = document.getElementById('categoryValue').value;
    let create = document.createElement("LI"); 
    create.setAttribute( "class","list-group-item");
    create.innerHTML = `<span contenteditable='true'>${inputVal}</span> ` + `<span>${inputValTwo}</span> ` + `${inputValThree}` + "<span class='closeBtn'>\u00D7</span>";
    placement.appendChild(create); 

    const createData = {
        name: inputVal,
        date: inputValTwo,
        category: inputValThree
    }


    todos.push(createData);
    console.log(todos);

    let close = document.getElementsByClassName(`closeBtn`);

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let parent = this.parentElement;
            parent.style.display = "none";
            let selector = todos[i];
            todos.splice(selector);
            console.log(selector)
            console.log(todos);
            // let index = todos.indexOf(parent);
            // let x = todos.splice(index, 1);
            // console.log(`${todos}`);
            // console.log(`${x}`)
          }
    }

    
}

document.getElementById('mainCreate').addEventListener("click", addTodo);

