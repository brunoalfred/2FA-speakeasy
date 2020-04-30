// * including the needed modules in the server module
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');


// LOad the config file
dotenv.config({ path: './config/config.env' });

// Connecting to the DataBase
connectDB();



//  * Include the middllwares in this module
const logger = require('./middlewares/logger');


// * Include The route files
const bootcamps = require('./routes/bootcamps');

const app = express();

//* Defining an important middleware for express to handle
// * Parsing the body
app.use(express.json());



const port = process.env.PORT || 4000;


// LIstening to port number 5000 by the server
const server =  app.listen(port, () =>
    console.log(`server running on ${process.env.NODE_ENV} mode on port no. ${port}`));


//  Mount the routers
app.use('/api/v1/bootcamps', bootcamps);



// * Development LOGGER Middleware
// It Morgan is used to output request details on the console. 
// Therefore, Morgan output's anything that happens on the webpage.
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}





//! Handle Unhandle Promise rejection
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    // ! close the server && exit the process
    server.close(()=> promise.exit(1));
});

