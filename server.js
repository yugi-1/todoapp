const express = require ('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const { create } = require('yallist');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('client'));

let todos=[];
const deleted =[];
let categories = [];
const createData = {
    name: 'todo',
    date: 'date', 
    category: 'category'
}

const createDataArr = [
    {
        name: 'todo',
        date: 'date', 
        category: 'category',
        deleted: true
    },
    {
        name: 'todo1',
        date: 'date1', 
        category: 'category1'
    },
    {
        name: 'todo2',
        date: 'date2', 
        category: 'category1'
    }

]

//get todos
app.get('/api/todos', (req, res) => {
    res.send(todos);
});

//add/post todo
app.post('/api/todo', (req, res) => {
    todos.push(createData);
    res.send(todos);
});

//edit todo
app.put('/api/edittodo', (req, res) => {
    let newVal = 'updated todo';
    createData.name = newVal;
    todos.push(createData);
    res.send(todos);
});

//delete todo
app.delete('/api/deletetodos', (req, res) => {
    if ( createDataArr.deleted = true) {
        createDataArr.shift();
        todos.push(createDataArr);
    }
    // createDataArr = createDataArr.filter((item) => item.deleted != true);
    res.send(todos);
});

//get all todos for a category NOT DONE
app.get('/api/todoscat', (req, res) => {
    todos.push(createDataArr);
    res.send(todos);
});

//get categories
app.get('/api/categories', (req, res) => {
    categories.push(createData.category);
    res.send(categories);
});

//post/add categories
app.post('/api/postcat', (req, res) => {
    let newCate = 'education';
    createData.category = newCate;
    todos.push(createData);

    res.send(todos);
});

//edit category
app.put('/api/putcat', (req, res) => {
    let newValCat = 'updated category';
    createData.category = newValCat;
    todos.push(createData);
    res.send(todos);
});

//delete category
app.delete('/api/deletecat', (req, res) => {
    if ( createDataArr.category = 'category1') {
        createDataArr.shift();
        todos.push(createDataArr);
    }
    res.send(todos);
});


app.listen(port, () => {
    console.log(`this is ${port}`);
});;

