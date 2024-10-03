package com.maisdividendos.stock_api;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.maisdividendos.stock_api.entities.StockPrice;

@Repository
public interface StockRepository extends JpaRepository<StockPrice, Long> {
    StockPrice findByTicker(String ticker);
}
