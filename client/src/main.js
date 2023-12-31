let baseURL = 'http://localhost:3000/';
//fetch(baseURL + '/api/todos')
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

    // const createData = {
    //     name: inputVal,
    //     date: inputValTwo, 
    //     category: inputValThree
    // }
    fetch("/api/todo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
            name: inputVal,
            date: inputValTwo, 
            category: inputValThree,
        })
    })
        .then((res) => res.json())
        .then((data) => console.log(data));

    // todos.push(createData);
    // console.log(todos);

//edit todo
let editSelect = document.getElementsByClassName('editBtn');
let placementTwo = document.getElementById('editField');

    for (let i = 0; i < editSelect.length; i++ ) {
        editSelect[i].addEventListener('click', editTodo);
         function editTodo() {
            let newInput = document.createElement('input');
            newInput.setAttribute( "class","form-control");
            newInput.type = 'text';
            newInput.value = inputVal;

            let newInputCat = document.createElement('input');
            newInputCat.setAttribute( "class","form-control");
            newInputCat.type = 'text';
            newInputCat.value = inputValThree;

            let newInputDate = document.createElement('input');
            newInputDate.setAttribute( "class","form-control");
            newInputDate.type = 'date';
            newInputDate.value = inputValTwo;
        
            let newBtn = document.createElement('button');
            newBtn.setAttribute( "class","btn btn-primary");
            newBtn.innerHTML = `Submit Edit`;
            newBtn.type = 'submit';
           
            placementTwo.appendChild(newInput);
            placementTwo.appendChild(newInputCat);
            placementTwo.appendChild(newInputDate);
            placementTwo.appendChild(newBtn);
//dom form end

            newBtn.onclick = function() {
            let newTodo = newInput.value;
            let newCat = newInputCat.value;
            let newDate = newInputDate.value;

            fetch("/api/edittodo", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify({
                    name: newTodo,
                    date: newDate, 
                    category: newCat,
                    index: i
                })
            })
                .then((res) => res.json())
                .then((data) => console.log(data));


            create.innerHTML = `<span class="inputvalone">${newTodo}</span> ` + `<span class="inputvalthree" >${newDate}<span class="inputvaltwo" contenteditable='true'>${newCat}</span></span>` + ` <span class='closeBtn'>\u00D7</span>` + `<span class="editBtn">Edit</span>` +`<span id="editField"></span>`;
            placement.appendChild(create);
            }
        }  
    } 

    let close = document.getElementsByClassName(`closeBtn`);

       for (let i = 0; i < close.length; i++) { 
        close[i].onclick = function() {
            let parent = this.parentElement;
            parent.style.display = "none";
            count--;
            updateCounter();
            deleteI();
          } 
        //start backend
        //   let thisObj = todos[i];

          function deleteI() {
            //onclick add property to object (deleted: true)
            // thisObj['deleted'] = true;
            //filter deleted objects from array

            // todos = todos.filter((todo) => todo.deleted != true);
            // console.log(todos);

            fetch("/api/deletetodos", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify({
                    name: inputVal,
                    date: inputValTwo, 
                    category: inputValThree,
                    index: i
                })
            })
                .then((res) => res.json())
                .then((data) => console.log(data));

        //end backend
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

// add new cat
let addCat = document.getElementById('categoryValue');
let addCatBtn = document.getElementById('addCatB');
addCatBtn.onclick = function() {
    let addCatI = document.getElementById('addCat').value;
    let nOption = document.createElement('option');
    nOption.text = addCatI;
    categoryValue.add(nOption);
    console.log(nOption);
}
//remove cat
let remCatBtn = document.getElementById('deleteCatB');
remCatBtn.onclick = function() {
   addCat.remove(addCat.selectedIndex);
}
//edit category
let editCatBtn = document.getElementById('editCatB');
editCatBtn.onclick = function() {
    let addCatI = document.getElementById('addCat').value;
    let nOption = document.createElement('option');
    nOption.text = addCatI;
    categoryValue.add(nOption);
    
    addCat.remove(addCat.selectedIndex);

   updateCat();
}

let filBtn = document.getElementById('filterB');
//beginning of filter func
function sortFunc() {
    let d = placement.children;
    let inputValThree = document.getElementById('categoryValue').value;
    for (let i = 0; i < todos.length; i++) {
        if (inputValThree !== todos[i].category) {
           d[i].classList.toggle('notShown');
           filBtn.innerText = `Reset Filter`
        }
    }
}