const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 8000;
const db = require('./util/database');
const todosRoutes = require('./routes/todos');
app.use(cors());
// bodyparser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/todos', todosRoutes);
app.listen(port, () => {
    console.log(`App is listening to port ${port}`);
});