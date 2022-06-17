var session = require('express-session');
var SQLiteStore = require('connect-sqlite3')(session);
var passport = require('passport');
var indexer = require('./routes/index');
var auths = require('./routes/passport');

const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(session({
  secret: 'chucky cheese',
  resave: false,
  saveUninitialized: false,
  store: new SQLiteStore({ db: 'sessions.db', dir: './var/db' })
}));
app.use(passport.authenticate('session'));
app.use('/', indexRouter);
app.use('/', authRouter);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});
app.listen(port, () => {
  console.log(`Group Project listening at http://localhost:${port}`);
}); 