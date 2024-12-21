const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const memberRoutes = require('./routes/memberRoutes');
const bookRoutes = require('./routes/bookRoutes');
const borrowingRoutes = require('./routes/borrowingRoutes')

const { sequelize } = require('./config/database');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api/members', memberRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/borrowings', borrowingRoutes);

sequelize.sync({ force: false }).then(() => {
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
});
