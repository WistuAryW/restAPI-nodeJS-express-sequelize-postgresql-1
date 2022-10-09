const express = require('express');

const cors = require('cors');
const app = express();

const db = require('./models');
db.sequelize.sync();

var corsOptions = {
  origin: 'http://localhost:8081',
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to step by step nodejs express sequelize postgresql.' });
});

require('./routes/turorial.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
