const express = require('express');
const app = express();
const port = 3000;

// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/images', express.static(__dirname + 'public/images'));

app.get('', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

// Listen on port
app.listen(port, () => console.info(`Listening on port ${port}`))
