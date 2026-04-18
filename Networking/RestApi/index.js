import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json())

app.all('/', (req, res)=> {
    res.send("I'm up")
})


const todos = [
    {id: "1", todoName: 'Task 1', completed: false},
    {id: "2", todoName: 'Task 2', completed: false}
]

// CREATE

app.post('/todos', (req,res)=> {
    const newTodo = req.body;
    todos.push(newTodo);
    res.json({
        message: 'New Todo Added successfully'
    })
})

// READ
app.get('/todos', (req, res) => {
    res.json(todos);
});

// UPDATE
app.put('/todos/:id', (req,res)=> {
    const updatedTodoData = req.body;
    const todoParamId = req.params.id;
    const todoIndex = todos.findIndex(todo=> todo.id === todoParamId);
    
    if(todoIndex !== -1) {
        todos[todoIndex] = {
            id: todoParamId,
            ...updatedTodoData
        }
    }

    res.json({
        message: 'Todo updated successfully'
    })
})

// DELETE

app.delete('/todos/:id', (req, res)=> {
    const todoParamId = req.params.id;
    const todoIndex = todos.findIndex(todo=> todo.id === todoParamId);

    if(todoIndex !== -1) {
        todos.splice(todoIndex, 1);
    }

    res.json({
        message: 'Todo deleted successfully'
    })
})

const PORT = 5000;
app.listen(PORT, ()=> {
    console.log(`Server is running ${PORT}`);
})