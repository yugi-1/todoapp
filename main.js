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
    create.innerHTML = `<span contenteditable='true' class="inputvalone">${inputVal}</span> ` + `<span class="inputvalthree" contenteditable='true'>${inputValThree}<span class="inputvaltwo" contenteditable='true'>${inputValTwo}</span></span>` + ` <span class='closeBtn'>\u00D7</span>`;
//   placement.style.display = 'inline';
    placement.appendChild(create); 

    const createData = {
        name: inputVal,
        date: inputValTwo, 
        category: inputValThree
    }

    todos.push(createData);

 
    let close = document.getElementsByClassName(`closeBtn`);
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let parent = this.parentElement;
            parent.style.display = "none";

            
            let selector = todos[i];
            todos.splice(selector);
            // let index = todos.indexOf(parent);
            // let x = todos.splice(index, 1);
            // console.log(`${todos}`);
            // console.log(`${x}`)
          }
         
        
          

    }
}

function clearAll() {
    let c = placement.children;
    for (i = 0; i < c.length; i++) {
        c[i].setAttribute( "id","deleted");
    }
  }

document.getElementById('mainClear').addEventListener("click", clearAll);
document.getElementById('mainCreate').addEventListener("click", addTodo);

//counter
let count = 0;

function counter() {
    let listGroup = document.getElementsByClassName(`list-group-item`);
    for (i = 0; i < listGroup.length; i++) {
        if(window.getComputedStyle(listGroup[i]).display != "none"){
            count++;
            console.log(count);
        }
    }
}
counter();
document.getElementById('counting').innerHTML = `${count}`;
console.log(count);

