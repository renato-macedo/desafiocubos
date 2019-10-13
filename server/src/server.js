require('dotenv').config();
const app = require('./app')();
app.listen(5000, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }

  app.log.info(`server listening on ${address}`);
});
