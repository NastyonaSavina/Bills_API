const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const { billsRouter } = require('./routes/bills');
const { errorHandler } = require("./helpers/index");

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());



app.use('/api/bills', billsRouter);


app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
});

app.use(errorHandler);

module.exports = app;
