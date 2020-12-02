const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const fs = require('fs');

require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

require('./routes/auth.routes.js')(app);
require('./routes/locations.routes.js')(app);
require('./routes/user_group.routes.js')(app);
require('./routes/products.routes.js')(app);

app.get('/', (req, res) => {
    return res.status(404).send({
        'error': 'resource not found!'
    });
})

app.listen(3005, () => {
    console.log('Server started on port 3005');
})