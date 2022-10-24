const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send('Hellso sWorld!');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});