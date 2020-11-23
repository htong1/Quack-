const express = require('express'); 
/*
 Imports the express library.
 This is necessary to have an express server.
*/
const bodyParser = require('body-parser');  // Node.js body parsing middleware.

const app = express(); // Creates an app for your servers client

app.use(express.static('public')); // load the files that are in the public directory

app.listen(3000, () => console.log('server started'));
