const express = require ('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('client'));


let todos = [
    {
        id: 0,
        todo: 'fdksjaf',
        done: false
    },
    {
        id: 1,
        todo: 'fdksjafdflaksdf',
        done: true
    }
]

app.get('/api/todos', (req, res) => {
    res.send(todos);
});

//add todo
app.post('/api/todo', (req, res) => {
    todos.push({
        id: todos.length + 1,
        todo: req.body.todo,
        done: false
    })
    res.send(todos);
});

app.put('/api/puttodos', (req, res) => {
    res.send('put todos');
});

app.delete('/api/deletetodos', (req, res) => {
    res.send('delete todos');
});

app.get('/api/todoscat', (req, res) => {
    res.send('get all todos for category');
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

