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
    logger.debug('Debug lvl')
    logger.info('info lvl')
    logger.warn('warn lvl')
    logger.error('err lvl')
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
