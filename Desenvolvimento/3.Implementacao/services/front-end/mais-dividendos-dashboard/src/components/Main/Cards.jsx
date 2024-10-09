import React, { useState } from 'react';
import CardFilter from './CardFilter';
import './card.css';

function Cards({ price }) {
  const [filter, setFilter] = useState('Today');
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  return (
    <div className="col-xxl-4 col-md-6">
      <div className="card info-card sales-card">
        <CardFilter filterChange={handleFilterChange} />
        <div className="card-body">
          <h5 className="card-title">
            {price.ticker} <span>| {filter} </span>
          </h5>

          <div className="d-flex align-items-center">
            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
              <i className={price.icon}></i>
            </div>
            <div className="ps-3">
              <h6>
                {price.ticker === 'SAPR4'
                  ? '$' + price.price.toLocaleString('pt-BR')
                  : price.price.toLocaleString('pt-BR')}
              </h6>

              <span
                className={`${
                  price.percentage > 0 ? 'text-success' : 'text-danger'
                } small pt-1 fw-bold`}
              >
                {price.percentage > 0
                  ? price.percentage * 100
                  : -price.percentage * 100}
                %
              </span>
              <span className="text-muted small pt-2 ps-1">
                {price.percentage > 0 ? 'increase' : 'decrease'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
