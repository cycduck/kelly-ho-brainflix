const express = require('express');
const router = express.Router();
const cors = require('cors');

module.exports = router;
router.use(express.json());
router.use(cors());
// built-in middleware func that parses incoming requests with JSON payloads

// https://hackernoon.com/how-to-develop-a-boilerplate-for-api-with-node-js-express-and-mongodb-4c771ae1c2df
// https://www.freecodecamp.org/news/how-to-write-a-production-ready-node-and-express-app-f214f0b17d8c/
// https://scotch.io/tutorials/keeping-api-routing-clean-using-express-routers
// https://www.terlici.com/2014/08/25/best-practices-express-structure.html