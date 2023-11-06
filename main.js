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
 
    let close = document.getElementsByClassName(`closeBtn`);

    // for (let i = 0; i < todos.length; i++ ) {
       for (let i = 0; i < close.length; i++) {   
        close[i].onclick = function() {
            let parent = this.parentElement;
            parent.style.display = "none";

            console.log(i);
    
            console.log(todos);
            // console.log(todos.length);
            // console.log(todos[i]);
            // console.log([i]);


            count--;
            updateCounter();
          }   
            
 
    }
    // }
 
    // for (let i = 0; i < close.length; i++) {   
    //     close[i].onclick = function() {
    //         let parent = this.parentElement;
    //         parent.style.display = "none";

    //         // console.log(todos.length);
    //         // console.log(todos[i]);
    //         // console.log([i]);
    //         console.log(todos);

    //         count--;
    //         updateCounter();
    //       }   
            
 
    // }
}




function clearAll() {
    count = 0;
    deleted.push(...todos);
    todos.length = 0;
    // console.log(deleted);
    console.log(todos);
    updateCounter();
    let c = placement.children;
    for (i = 0; i < c.length; i++) {
        c[i].setAttribute( "id","deleted");
        
    }
 
  }

document.getElementById('mainClear').addEventListener("click", clearAll);
document.getElementById('mainCreate').addEventListener("click", addTodo);

//counter



let count = 0;

function updateCounter() {
    document.getElementById('counting').innerHTML = count;
};

document.getElementById('mainCreate').addEventListener("click", () => {
    count++;
    updateCounter();
    console.log(count);
});
