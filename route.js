const express = require('express');
const app = express();
const service = require('./service.js');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/downloadVideo', (req, res) => {
    service.downloadFile(req.query.urlVideo, req.query.fileName);
    res.send(req.query.fileName);
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
