const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('public'))

app.listen(port, () => {
    console.log(`Started app on port ${port}`);
});

module.exports = {app};