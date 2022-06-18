const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

// var SQLiteStore = require('connect-sqlite3')(session);
// var passport = require('passport');
// var indexer = require('./routes/index');
// var auths = require('./routes/passport');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;
// app.use(express.json());
// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );

const sess = {
  secret: 'chucky cheese',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({ 
    db: sequelize})
};

app.use(session(sess));
// app.use(passport.authenticate('session'));
// app.use('/', indexer);
// app.use('/', auths);

// app.get("/", (req, res) => {
//   res.json({ message: "ok" });
// });

// app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
