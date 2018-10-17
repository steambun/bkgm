/** require dependencies */
const express = require("express")
const path = require('path');
const routes = require('./routes/')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')

const app = express()
const router = express.Router()

let port = process.env.PORT || 5000

/** set up routes {API Endpoints} */
routes(router)

/** set up middlewares */
app.use(cors())
app.use(bodyParser.json())
app.use(helmet())
app.use('/api', router)

if (process.env.NODE_ENV === 'production') {
    console.log(`Server in production, redirecting all get requests to client`);
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }

/** start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});