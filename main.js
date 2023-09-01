const data = {
    name: "Yulissa",
    status: "done",
    id: 0,
    category: "School",
    date: "8-30-23"
}

let placement = document.getElementById('mainList');
function addTodo() {
    let inputVal = document.getElementById('mainValue').value;
    let inputValTwo = document.getElementById('dateValue').value;
    let inputValThree = document.getElementById('categoryValue').value;
    let create = document.createElement("LI"); 
    create.setAttribute( "class","list-group-item")
    create.innerHTML = `${inputVal}` + `${inputValTwo}` + `${inputValThree}` + "<span class='closeBtn'>\u00D7</span>";
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


