package com.maisdividendos.stock_api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.maisdividendos.stock_api.entities.StockPrice;

@Service
public class StockService {

    @Autowired
    private StockRepository repository;

    public StockPrice getPriceByTicker(String ticker) {
        StockPrice price = repository.findByTicker(ticker);
        System.out.println(price);
        return price;
    }

}
