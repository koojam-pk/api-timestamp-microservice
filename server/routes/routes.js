module.exports = app => {

    var path = require('path');
    var fs = require('fs');

    app.get('/api/:timestamp', (req, res) => {
        var data = req.params.timestamp;
        res.setHeader('Content-Type', 'application/json');
        res.send(parseTimestamp(data));
    });
    
    app.get('/api/', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({unix: null, natural: null}));
    });

    app.get('/', (req, res) => {
        var fullUrl = req.protocol + '://' + req.get('host');

        fs.readFile(path.join(__dirname + '/../public/index.html'), 'utf-8', function(err, data){
            if (err) throw err;
            
            res.setHeader('Content-Type', 'text/html');
            res.send(data.split('${fullUrl}').join(fullUrl));
        });
    });
    app.get('/styles.css', (req, res) => {
        res.sendFile(path.join(__dirname + '/../public/styles.css'));
    });
}

function parseTimestamp(timestamp) {
    var unix = null;
    var natural = null;
    var moment = require('moment');

    if (isNumber(timestamp)) {
        unix = +timestamp;
        natural = moment.unix(unix).format('MMMM DD, YYYY');
    } else {
        if (moment(timestamp, 'MMMM DD, YYYY').isValid()) {
            unix = new Date(timestamp).getTime() / 1000;
            natural = moment(new Date(timestamp)).format('MMMM DD, YYYY');
        } 
    }
    return {unix, natural};
}

function isNumber(value) {
    if ((undefined === value) || (null === value)) {
        return false;
    }
    if (typeof value == 'number') {
        return value;
    }
    return !isNaN(value - 0);
}
