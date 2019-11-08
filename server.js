const fs = require("fs");
const https = require("https");
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/favicon.ico', (req, res) => {})

app.get('/:id', async (request, response) => {
    const url = `https://active-portrait-images.s3-us-west-2.amazonaws.com/${request.params.id}.png`;
    const file = fs.createWriteStream("public/temp.png");
    const req = https.get(url, (res) => {
        res.pipe(file);
        res.on('end', () => {
            response.render('index');
          });
    })
})

app.listen(PORT || process.env.PORT)

