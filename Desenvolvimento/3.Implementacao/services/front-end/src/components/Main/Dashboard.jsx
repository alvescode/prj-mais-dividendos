import React, { useState, useEffect } from "react";
import Cards from "./Cards";

function Dashboard() {
  const [prices, setPrices] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/stock/prices");
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await res.json();
      if (!json?.prices) {
        throw new Error("Invalid data format: 'prices' key not found");
      }
      console.log(json);
      console.log(json["prices"]);
      setPrices(json["prices"]);
    } catch (e) {
      console.error("Error fetching data:", e.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="dashboard section">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {prices && prices.length > 0 ? (
              prices.map((price) => <Cards key={price.id} price={price} />)
            ) : (
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
