import React from 'react';
import List from './components/List';

function App() {
  const MOCK_DATA = [
    {
      id: 163338,
      name: 'Tangos Burger',
      allCategories: 'Pollo,Sándwiches,Hamburguesas,Milanesas,Postres',
      ratingScore: 4.37,
      discount: 10,
      isNew: false,
      logo: 'https://source.unsplash.com/random/?food,restaurant',
      opened: true,
      deliveryAreaId: 4,
      deliveryArea: {
        id: 4,
        shippingAmount: 96,
        deliveryTime: "Entre 25' y 30'",
      },
    },
  ];

  return (
    <main>
      <List data={MOCK_DATA} />
    </main>
  );
}

export default App;
