let todos=[];
const deleted =[];
let placement = document.getElementById('mainList');

function addTodo() {
    let inputVal = document.getElementById('mainValue').value;
    let inputValTwo = document.getElementById('dateValue').value;
    let inputValThree = document.getElementById('categoryValue').value;
    let create = document.createElement("LI"); 
    create.setAttribute( "class","list-group-item");
    create.innerHTML = `<span class="inputvalone">${inputVal}</span> ` + `<span class="inputvalthree" >${inputValThree}<span class="inputvaltwo" contenteditable='true'>${inputValTwo}</span></span>` + ` <span class='closeBtn'>\u00D7</span>` + `<span class="editBtn">Edit</span>` +`<span id="editField"></span>`;
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
        let placementTwo = document.getElementById('editField');
        editSelect[i].onclick = function() {
            // let newInput = document.createElement('input');
            // newInput.setAttribute( "class","form-control");
            // newInput.type = 'text';
            // newInput.value = inputVal;

            // let newInputCat = document.createElement('input');
            // newInputCat.setAttribute( "class","form-control");
            // newInputCat.type = 'text';
            // newInputCat.value = inputValThree;

            // let newInputDate = document.createElement('input');
            // newInputDate.setAttribute( "class","form-control");
            // newInputDate.type = 'date';
            // newInputDate.value = inputValTwo;
        
            // let newBtn = document.createElement('button');
            // newBtn.setAttribute( "class","btn btn-primary");
            // newBtn.innerHTML = `Submit Edit`;
            // newBtn.type = 'submit';
           
            // placementTwo.appendChild(newInput);
            // placementTwo.appendChild(newInputCat);
            // placementTwo.appendChild(newInputDate);
            // placementTwo.appendChild(newBtn);

            // let newTodo = newInput.value;
            // let newCat = newInputCat.value;
            // let newDate = newInputDate.value;

            // newBtn.onclick = function() {
            //  //replace old text with new text
            // }
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