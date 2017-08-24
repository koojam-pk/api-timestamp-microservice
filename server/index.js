const express = require('express');

const app = express();

var fs = require('fs');

require('./routes/routes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
    console.log("Server is running at " + PORT);
});