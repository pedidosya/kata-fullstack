const express = require('express');
const bodyParser = require('body-parser');
const paginate = require('paginate-array');
const randomFailureMiddleware = require('./randomFailureMiddleware');
const randomDelay = require('./randomDelay');

/** DATABASES */
const carsDB = require('./databases/cars-database.json');
const motorbikesDB = require('./databases/motorbikes-database.json');
const restaurantsDB = require('./databases/restaurants-database.json');
const restaurantsV2DB = require('./databases/restaurants-v2.json');
const deliveryAreasDB = require('./databases/delivery-areas.json');
const kiosksDB = require('./databases/kiosks-database.json');
const movies = require('./databases/movies.json');
const emojis = require('./databases/emojis.json');

const app = express();
const cors = require('cors');
const port = 8090;

app.use(express.static(__dirname + '/static'));
app.use(bodyParser.json());
app.use(cors());
app.use(randomDelay);
app.use(randomFailureMiddleware(0.2));

const sortAndPaginateMiddleware = (sortAttr) => (req, res) => {
  const page = req.query.p;
  const sort = req.query.sort;
  let db = res.locals.db;

  if (sort) {
    db = db.sort((a, b) => {
      if (a[sortAttr] > b[sortAttr]) return 1;
      if (a[sortAttr] < b[sortAttr]) return -1;
      return 0;
    });
  }

  if (!page) res.json(db);
  else res.json(paginate(db, page, 100));
  res.end();
};

app.get(
  '/api/restaurants',
  (req, res, next) => {
    const { query } = req || {};
    const { search } = query;

    const formatString = (string) =>
      string
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLocaleLowerCase();

    // Replace logo url
    restaurantsDB.forEach(
      (rest) =>
        (rest.logo = 'https://source.unsplash.com/random/?food,restaurant')
    );
    if (search) {
      const filter = restaurantsDB.filter((restaurant) =>
        formatString(restaurant.name).includes(formatString(search))
      );
      res.locals.db = filter;
    } else {
      res.locals.db = restaurantsDB;
    }

    next();
  },
  sortAndPaginateMiddleware('name')
);

app.get(
  '/v2/api/restaurants',
  (req, res, next) => {
    const { query } = req || {};
    const { search } = query;

    const formatString = (string) =>
      string
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLocaleLowerCase();

    // Replace logo url
    restaurantsV2DB.forEach(
      (rest) =>
        (rest.logo = 'https://source.unsplash.com/random/?food,restaurant')
    );
    if (search) {
      const filter = restaurantsV2DB.filter((restaurant) =>
        formatString(restaurant.name).includes(formatString(search))
      );
      res.locals.db = filter;
    } else {
      res.locals.db = restaurantsV2DB;
    }

    next();
  },
  sortAndPaginateMiddleware('name')
);

app.post('/v2/api/rest/getDeliveryAreas', (req, res, next) => {
  return res.status(201).json(deliveryAreasDB);
});

app.get(
  '/api/kiosks',
  (req, res, next) => {
    res.locals.db = kiosksDB;
    next();
  },
  sortAndPaginateMiddleware('vendor')
);

app.get(
  '/api/cars',
  (req, res, next) => {
    res.locals.db = carsDB;
    next();
  },
  sortAndPaginateMiddleware('make')
);

app.get('/api/cars/:id', (req, res) => {
  res.json(carsDB.find((car) => car.id == req.params.id));
});

app.patch('/api/cars/:id', (req, res) => {
  const starred = Boolean(req.body.starred);

  carsDB.forEach((car) => {
    if (car.id == req.params.id) car.starred = starred;
  });

  res.json(carsDB.find((car) => car.id == req.params.id));
});

app.get(
  '/api/motorbikes',
  (req, res, next) => {
    res.locals.db = motorbikesDB;
    next();
  },
  sortAndPaginateMiddleware('make')
);

app.get('/api/motorbikes/:id', (req, res) => {
  res.json(motorbikesDB.find((car) => car.id == req.params.id));
});

app.patch('/api/motorbikes/:id', (req, res) => {
  const starred = Boolean(req.body.starred);

  motorbikesDB.forEach((car) => {
    if (car.id == req.params.id) car.starred = starred;
  });

  res.json(motorbikesDB.find((car) => car.id == req.params.id));
});

app.get('/api/movies', (req, res) => {
  if (req.query.search) {
    return res.json(
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(req.query.search)
      )
    );
  }
  res.json(movies);
});

app.get('/api/emojis', (req, res) => {
  if (req.query.search) {
    return res.json(
      Object.keys(emojis)
        .filter((key) => key.includes(req.query.search))
        .reduce((obj, key) => {
          obj[key] = emojis[key];
          return obj;
        }, {})
    );
  }
  return res.json(emojis);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
