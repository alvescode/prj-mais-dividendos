package com.maisdividendos.stock_api;

import java.util.Arrays;
import java.util.List;

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

    public List<StockPrice> getPrices() {
        return Arrays.asList(
                repository.findByTicker("PETR4"),
                repository.findByTicker("PETR4"));
    }

}
