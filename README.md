# Full Stack Kata

- This project uses Node v16

## Starting the project

1. Install dependencies

```bash
npm install
```

2. Start the API

```bash
npm run start-be
```

3. Start the dev server for the React frontend

```bash
npm run start
```

4. Running the tests in watch mode

```bash
npm run test
```

# API Reference

Some considerations

- The API may fail anytime
- The API may take up to 3 seconds to respond

## Cars

### [GET] /api/cars

> Returns a list of cars

```json
[
  {
    "id": 1,
    "make": "Mercedes-Benz",
    "model": "E-Class",
    "year": 1990,
    "color": "#2e904d",
    "thumbnail": "http://dummyimage.com/174x138.png/cc0000/ffffff",
    "starred": false,
  },
  {...}
  {
    "id": 25,
    "make": "Suzuki",
    "model": "Grand Vitara",
    "year": 2005,
    "color": "#f16882",
    "thumbnail": "http://dummyimage.com/216x187.png/dddddd/000000",
    "starred": true,
  },
];
```

### [GET] /api/cars/:carId

> Returns a car details

```json
{
  "id": 123,
  "make": "Jeep",
  "model": "Compass",
  "year": 2010,
  "color": "#19b4b3",
  "thumbnail": "http://dummyimage.com/101x229.png/5fa2dd/ffffff",
  "starred": false
}
```

### [PATCH] /api/cars/:carId

> Return the modified car

Body

```javascript
{
  starred: true | false;
}
```

## Restaurants

### [GET] /api/restaurants

> Returns a list of restaurants with delivery area info

```json
[
  {
    "id": 136539,
    "name": "Pizzería Squzi",
    "allCategories": "Empanadas,Pizzas,Tartas,Pastas",
    "ratingScore": 4.42,
    "deliveryTime": "Entre 30' y 45'",
    "shippingAmount": 89,
    "discount": 0,
    "isNew": false,
    "logo": "pizzeria-squzi.jpg",
    "opened": true,
  },
  {...},
  {
    "id": 106513,
    "name": "El Noble Barrio Norte 2",
    "allCategories": "Pizzas,Empanadas,Tartas,Postres,Cafetería",
    "ratingScore": 4.54,
    "deliveryTime": "Entre 30' y 45'",
    "shippingAmount": 79,
    "discount": 0,
    "isNew": false,
    "logo": "el-noble-barrio-norte-2.jpg",
    "opened": false,
  },
];
```

### [GET] /v2/api/restaurants

> Returns a list of restaurants with delivery area ID

```json
[
  {
    "id": 136539,
    "name": "Pizzería Squzi",
    "allCategories": "Empanadas,Pizzas,Tartas,Pastas",
    "ratingScore": 4.42,
    "discount": 0,
    "isNew": false,
    "logo": "https://source.unsplash.com/random/?food,restaurant",
    "opened": true,
    "deliveryAreaId": 2
  },
  {...},
  {
    "id": 106513,
    "name": "El Noble Barrio Norte 2",
    "allCategories": "Pizzas,Empanadas,Tartas,Postres,Cafetería",
    "ratingScore": 4.54,
    "discount": 0,
    "isNew": false,
    "logo": "https://source.unsplash.com/random/?food,restaurant",
    "opened": false,
    "deliveryAreaId": 2
  },
];
```

### [POST] /v2/api/rest/getDeliveryAreas

> Returns a list of delivery areas

```json
[
{
    "id": 1,
    "shippingAmount": 68,
    "deliveryTime": "Entre 20' y 25'"
  },
  {...},
  {
    "id": 30,
    "shippingAmount": 32,
    "deliveryTime": "Entre 10' y 15'"
  }
];
```
