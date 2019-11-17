const express = require('express');
const app = express();
const middleware = require('./middleware/middleware');
 // this is necessary otherwise it won't work here
const videoRoute = require('./routes/video');
  
app.listen(8080, ()=> {
  console.log('if you see this message, it is working')
})

// has express.json atm
app.use('/', middleware);

// routes
app.use('/', videoRoute);