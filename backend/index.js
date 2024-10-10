const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())
// app.use(bodyParser.json());


app.use((req,res)=>{
    // console.log('Request:\n:',req)
})


app.get('/', (req, res) => {
    console.log('ping detected')
    res.send('Hello from Express!');
});

app.get('/api/todos', (req,res)=>{
    console.log('request recieved for todos')
    res.json([
        {id:1, task:'Learn React', completed:false},
        {id:2, task:'Learn Express', completed:false}
    ])
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});