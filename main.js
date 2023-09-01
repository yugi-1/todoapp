const data = [];

const deleted = [];
let placement = document.getElementById('mainList');

function addTodo() {
    let inputVal = document.getElementById('mainValue').value;
    let inputValTwo = document.getElementById('dateValue').value;
    let inputValThree = document.getElementById('categoryValue').value;
    let create = document.createElement("LI"); 
    create.setAttribute( "class","list-group-item")
    create.innerHTML = `<span contenteditable='true' >${inputVal}</span> ` + `<span>${inputValTwo}</span> ` + `${inputValThree}` + "<span class='closeBtn'>\u00D7</span>";
    placement.appendChild(create); 
    
    let close = document.getElementsByClassName(`closeBtn`);

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let parent = this.parentElement;
            parent.style.display = "none";
          }
    }
}
document.getElementById('mainCreate').addEventListener("click", addTodo);

function todos() {
    document.getElementById("content").innerHTML = "<input type='text' id='todoAdd' placeholder='To Do...'><input type='submit' id='todoB' value='Add To Do' onclick='todoList()'>";
  } 
