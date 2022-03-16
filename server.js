const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();

// Get the body parser for parsing HTTP POST request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Configure static file serving
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/lib', express.static(path.resolve('./node_modules')));

// All other routes are sent the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'))''
});

// Get the port from the environment (default is 3000) and set it in Express
const port = process.env.PORT || '3000';
app.set('port', port);

// Create the HTTP server.
const server = http.createServer(app);

// Listen on provided port, on all network interfaces.
server.listen(port, () => console.log(`Server with Express running on 
    localhost:${port}`));