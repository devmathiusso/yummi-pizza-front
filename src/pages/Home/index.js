import React, { useEffect, useState } from 'react';

import api from '../../api';
import LoadingSpinner from '../../components/LoadingSpinner';
import PizzaCard from './PizzaCard';
import PizzaDialog from './PizzaDialog';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [selectedPizza, selectPizza] = useState(null);

  useEffect(() => {
    async function fetchPizzas() {
      const response = await api.get('/pizzas');
      setPizzas(response.data.pizzas);
    }

    fetchPizzas();
  }, []);

  const renderPizzaList = () => {
    return pizzas.map(pizza => {
      return (
        <PizzaCard 
          pizza={pizza} 
          key={`menu-pizza-${pizza.id}`} 
          openPizzaDialog={selectPizza}
        />
      )
    })
  }

  if (!pizzas.length) {
    return <LoadingSpinner />
  }

  return (
    <>
      {renderPizzaList()}

      <PizzaDialog
        selectedPizza={selectedPizza}
        closeDialog={selectPizza}
      />
    </>
  )
}

export default Home;