const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const PORT = process.env.PORT || 8000;

// set up view engine and views directory
app.set('view engine' , 'hbs');
app.set('views' , path.join(__dirname , "views" ));
hbs.registerPartials(path.join(__dirname , "views/partials"));

// serve static files from the public directory
app.use(express.static(path.join(__dirname , "public")));

// Routes
const indexRoute = require('./routes/index');
app.use('/' , indexRoute);

// Start the server
app.listen(PORT , () => {
    console.log(`server is running at port ${PORT}`)
})