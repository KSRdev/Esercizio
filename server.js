const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 4000;

let appointments = [];


app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json(null, 2));

app.get('/appointments', (req, res) => {
    
    res.send(JSON.stringify(appointments, null, 2))
    console.log(JSON.stringify(appointments, null, 2))

});

app.post('/scheduler/post', (req, res) => {
    const appointment = req.body;

    console.log(appointment);
    appointments.push(appointment);

    res.send('appointments is added to the database');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));