package com.maisdividendos.stock_api.services;

import java.util.Arrays;
import java.util.List;
import java.util.ArrayList;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.maisdividendos.stock_api.dtos.StockPriceResponse;
import com.maisdividendos.stock_api.entities.StockPrice;
import com.maisdividendos.stock_api.repository.StockRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class StockService {

    @Autowired
    private StockRepository repository;

    public StockPriceResponse getPriceByTicker(String ticker) {
        Optional<StockPrice> price = repository.findByTicker(ticker);
        System.out.println(price);
        if (price.isEmpty()) {
            throw new EntityNotFoundException("Ticker inválido.");
        }
        StockPrice stock = price.get();
        System.out.println(stock.getId());
        return new StockPriceResponse(stock.getTicker(), stock.getPrice(), stock.getLastUpdate());
    }

    public List<StockPriceResponse> getPrices() {

        List<StockPriceResponse> responses = new ArrayList<>();

        List<String> ranking_mock = Arrays.asList("LREN3", "B3SA3");

        for (String ticker : ranking_mock) {
            Optional<StockPrice> price = repository.findByTicker(ticker);
            if (price.isPresent()) {
                StockPrice stock = price.get();
                responses.add(new StockPriceResponse(stock.getTicker(), stock.getPrice(), stock.getLastUpdate()));
            }
        }
        return responses;
    }
}
