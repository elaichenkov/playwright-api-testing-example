const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 1337;

function isAuthorized(req, res, next) {
  if (req.method !== 'GET') {
    if (req.headers.authorization) {
      const authToken = 'token 5jsBfMf72VYA9QzCXC5eXZkd3q6VB8Gc';

      if (req.headers.authorization === authToken) {
        return next();
      }

      const userAndPassword = new Buffer(req.headers.authorization.split(' ')[1], 'base64').toString();
      const user = userAndPassword.split(':')[0];
      const password = userAndPassword.split(':')[1];

      if (user === 'admin' && password === 'admin') {
        next();
      } else {
        res.status(401).send({
          error: 'Unauthorized',
        });
      }
    } else {
      res.status(401).send({
        error: 'Unauthorized',
      });
    }
  } else {
    next();
  }
}

server.use(middlewares);
server.use(isAuthorized);
server.use(router);

server.listen(PORT, () => console.log(`JSON Server is running on port ${PORT}`));
