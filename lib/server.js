"use strict";

import * as middleware from './util/middleware-boilerplate';
import express from 'express';
import routes from './route/all';
import path from 'path';

let app = express();

await middleware(app, process.env);

app.use('/api', routes);

app.use((req, res) => {
  res.status('404').send();
});

app.listen(app.get('port'), () => {
  console.log('Express server listening on port: ', app.get('port'));
});

export default app;