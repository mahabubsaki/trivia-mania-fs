const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;
const quizes = require('./quizes.json');
app.get('/', (req, res) => {
    res.send('Hellso sWorld!');
});
app.get('/quizes', (req, res) => {
    res.send(quizes);
});
app.get('/quizes/:qid', (req, res) => {
    res.send(quizes.data.find(x => x.id === +req.params.qid));
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});