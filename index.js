require('dotenv').config();

const express = require('express');
const app = express();

app.set('view engine', 'ejs')

//ROUTE IMPORTS
app.use(express.urlencoded({ extended: true }))
app.use("/photos",express.static('photos'));
app.use(express.static('./public'))
const Router  = require('./routes/routes');
app.use("/", Router);

//APP SETTINGS
app.use(express.json());
const PORT = process.env.PORT || 5050;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
