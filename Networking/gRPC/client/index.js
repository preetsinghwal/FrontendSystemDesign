const express = require('express');
const bodyParser = require('body-parser');
const client = require('./client');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));

const PORT = 3000;

app.get('/', (req, res) => {
    client.getAll(null, (err, data)=> {
        if(!err) {
            console.log("Customer data fetched successfully");
            res.json({
                data: data.customers
            })
        } else {
            console.log("There is some error while fetching customer data. Please try again later")
        }
    })
})

app.post('/create', (req, res) => {
    
})

app.post('/update', (req, res) => {
    
})

app.delete('/remove', (req, res) => {
    
})

app.listen(PORT, ()=> {
    console.log('Client is running on PORT', PORT);
})