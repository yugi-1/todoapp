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
    console.log(todos);

 
    let listGroup = document.getElementsByClassName(`list-group-item`);
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

function clearAll() {
    let c = placement.children;
    for (i = 0; i < c.length; i++) {
        c[i].setAttribute( "id","deleted");
        console.log(c);
    }

  }

document.getElementById('mainClear').addEventListener("click", clearAll);
document.getElementById('mainCreate').addEventListener("click", addTodo);

//counter
let count = 0;
function counter() {
    let grab = document.getElementsByTagName('LI');
    for (i = 0; i < grab.length; i++) {
        // if (grab[i].style['display'] != 'none') {
        //         console.log('yipee'); there shouldnt be yipees when i clear all
        //     }
    }

    
}
document.getElementById('counting').addEventListener("click", counter);