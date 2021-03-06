
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const libraryRouter = require('./routes/library.router');
const titleRouter = require('./routes/title.router');
const personRouter = require('./routes/person.router');
const collectionRouter = require('./routes/collection.router');
const castRouter = require('./routes/cast.router');
const detailsRouter = require('./routes/details.router');
const reviewRouter = require('./routes/review.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/library', libraryRouter);
app.use('/api/title', titleRouter);
app.use('/api/person', personRouter);
app.use('/api/collection', collectionRouter);
app.use('/api/cast', castRouter);
app.use('/api/details', detailsRouter);
app.use('/api/review', reviewRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

// module.exports = app;