import React, { useState, useEffect } from 'react';
import Cards from './Cards';

function Dashboard() {
  const [prices, setPrices] = useState([]);

  const fetchData = () => {
    fetch('http://localhost:4000/prices')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        console.log('Data received from API:', data); // Log dos dados recebidos
        // Verifica se a estrutura dos dados contém a chave "prices"
        if (data.prices) {
          setPrices(data.prices); // Define os preços caso a chave exista
        } else {
          setPrices(data); // Define os preços diretamente se "prices" não existir
        }
      })
      .catch(e => console.error('Error fetching data:', e.message)); // Log de erros
  };


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className='dashboard section'>
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {prices && prices.length > 0 ? (
              // Se houver dados em "prices", renderiza os Cards
              prices.map(price => (
                <Cards key={price.id} price={price} />
              ))
            ) : (
              // Caso contrário, mostra a mensagem abaixo
              <p>No prices available.</p>
            )}
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </section>
  );
}

export default Dashboard;
