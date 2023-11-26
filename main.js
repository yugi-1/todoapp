let todos=[];
const deleted =[];
let placement = document.getElementById('mainList');

function addTodo() {
    let inputVal = document.getElementById('mainValue').value;
    let inputValTwo = document.getElementById('dateValue').value;
    let inputValThree = document.getElementById('categoryValue').value;
    let create = document.createElement("LI"); 
    create.setAttribute( "class","list-group-item");
    create.innerHTML = `<span class="inputvalone">${inputVal}</span> ` + `<span class="inputvalthree" >${inputValThree}<span class="inputvaltwo" contenteditable='true'>${inputValTwo}</span></span>` + ` <span class='closeBtn'>\u00D7</span>` + `<span class="editBtn">Edit</span>`;
//  placement.style.display = 'inline';
    placement.appendChild(create);   

    const createData = {
        name: inputVal,
        date: inputValTwo, 
        category: inputValThree
    }

    todos.push(createData);
    console.log(todos);
 
//edit todo
    let editSelect = document.getElementsByClassName('editBtn');
    for (let i = 0; i < editSelect.length; i++ ) {
        editSelect[i].onclick = function() {
            create.innerHTML = `<input type="text" id="editVal" class="form-control" value='${inputVal}' aria-label="Text input with dropdown button">` + `<input type="text" value='${inputValThree}' id="editValtwo" class="form-control" aria-label="Text input with dropdown button">` + `<input type="date" value='${inputValTwo}' id="editValthree" class="form-control" aria-label="Text input with dropdown button">` + `<button type="button" id="mainEdit" class="btn btn-primary">Submit</button>`;
            let newVal = document.getElementById('editVal').value;
            let newValtwo = document.getElementById('editValtwo').value;
            let newValthree = document.getElementById('editValthree').value;
            
            let submitEdit = document.getElementById('mainEdit');
            submitEdit.onclick = function() {
            create.innerHTML = `<span class="inputvalone">${newVal}</span> ` + `<span class="inputvalthree" >${newValthree}<span class="inputvaltwo" contenteditable='true'>${newValtwo}</span></span>` + ` <span class='closeBtn'>\u00D7</span>` + `<span class="editBtn">Edit</span>`;
            // placement.appendChild(create); 
            }
        } 
        
    }
 //end prototyping

    let close = document.getElementsByClassName(`closeBtn`);

       for (let i = 0; i < close.length; i++) { 
        close[i].onclick = function() {
            let parent = this.parentElement;
            parent.style.display = "none";
            count--;
            updateCounter();
            deleteI();
          } 
          
          let thisObj = todos[i];

          function deleteI() {
            //onclick add property to object (deleted: true)
            thisObj['deleted'] = true;
            //filter deleted objects from array
            todos = todos.filter((todo) => todo.deleted != true);
            console.log(todos);
        }
    }
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