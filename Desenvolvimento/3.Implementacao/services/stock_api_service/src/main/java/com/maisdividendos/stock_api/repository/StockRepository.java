package com.maisdividendos.stock_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.maisdividendos.stock_api.entities.StockPrice;
import java.util.Optional;

@Repository
public interface StockRepository extends JpaRepository<StockPrice, Long> {
    Optional<StockPrice> findByTicker(String ticker);
}
