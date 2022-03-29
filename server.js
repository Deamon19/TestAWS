const { logger } = require('./logger')
const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 8080;

app.use(morgan('combined'));
app.use(express.json());



app.get('/api/files', (request, response) => {
  try {
    console.debug('Debug lvl')
    console.info('info lvl')
    console.warn('warn lvl')
    console.error('err lvl')
    response.status(200).json({
      message: 'Success',
    });

  } catch (e) {
    logger.error('error')
  }
  return 'Returned inf'
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
});
