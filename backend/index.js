const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5063;

app.use(cors());
app.use(express.json())
// app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.get('/api/todos', (req,res)=>{
    res.json([
        {id:1, task:'Learn React', completed:false},
        {id:2, task:'Learn Express', completed:false}
    ])
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});