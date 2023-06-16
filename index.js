const express = require("express");
const mongoose = require("mongoose");


const app = express();

require("./startups/middleware")(app);
require("./startups/routes")(app);


const CONNECTION = 'mongodb://0.0.0.0:27017/practice'
const PORT = '4000'

mongoose.connect(CONNECTION).then(() => app.listen(PORT, () => console.log('app running on port 4000'))).catch(error => console.log(error))
