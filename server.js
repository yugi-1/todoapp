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

const createData = {
    name: 'todo',
    date: 'date', 
    category: 'category'
}



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
    res.send(todos);
});

//get all todos for a category
app.get('/api/todoscat', (req, res) => {

    res.send(todos);
});

app.get('/api/categories', (req, res) => {
    res.send('get categories');
});

app.post('/api/postcat', (req, res) => {
    res.send('post categories');
});

app.put('/api/putcat', (req, res) => {
    res.send('put categories');
});

app.delete('/api/deletecat', (req, res) => {
    res.send('delete categories');
});


app.listen(port, () => {
    console.log(`this is ${port}`);
});;

