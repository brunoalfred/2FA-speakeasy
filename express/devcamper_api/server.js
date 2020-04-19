// * including the needed modules in the server module
const express = require('express');
const dotenv = require('dotenv');


// * Include The route files
const bootcamps = require('./routes/bootcamps');

const app = express();


// LOad the config file
dotenv.config({ path: './config/config.env' });

const port = process.env.PORT || 5000;

// LIstening to port number 5000 by the server
app.listen(port, () =>
    console.log(`server running on ${process.env.NODE_ENV} mode on port no. ${port}`));


//  Mount the routers
app.use('/api/v1/bootcamps', bootcamps);


//! Middleware CONCEPTS
const logger = (req, res, next) => {
    req.hello = 'Hello Bruno';
    console.log('Middleware Up And Running');
    next();
}
