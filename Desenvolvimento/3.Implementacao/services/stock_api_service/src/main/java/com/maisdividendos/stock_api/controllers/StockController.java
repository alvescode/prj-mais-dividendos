package com.maisdividendos.stock_api.controllers;

import com.maisdividendos.stock_api.services.*;

import java.util.Map;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.maisdividendos.stock_api.dtos.StockPriceResponse;

@RestController
@RequestMapping("/api/stock")
public class StockController {

    @Autowired
    private StockService stockService;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/{ticker}")
    public ResponseEntity<StockPriceResponse> getPriceByTicker(@PathVariable String ticker) {
        System.out.println(ticker);
        StockPriceResponse response = stockService.getPriceByTicker(ticker);
        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(response);
    }
    // fazer tratamento de erros nos endpoints

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/prices")
    public ResponseEntity<Map<String, List<StockPriceResponse>>> getPrices() {
        List<StockPriceResponse> serviceResponse = stockService.getPrices();
        Map<String, List<StockPriceResponse>> response = new HashMap<>();
        response.put("prices", serviceResponse);
        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(response);
    }
    // intergração com a brapi para pegar a percentagem
}
