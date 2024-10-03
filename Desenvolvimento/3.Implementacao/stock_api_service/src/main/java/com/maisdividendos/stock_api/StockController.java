package com.maisdividendos.stock_api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.maisdividendos.stock_api.entities.StockPrice;

@RestController
@RequestMapping("/api/stock")
public class StockController {

    @Autowired
    private StockService stockService;

    // Receber StockRequest e entregar StockReponse //dto
    @GetMapping("/{ticker}")
    public ResponseEntity<StockPrice> getPriceByTicker(@PathVariable String ticker) {
        System.out.println(ticker);
        StockPrice response = stockService.getPriceByTicker(ticker);
        return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(response);
    }// nao pode retornar dois resultados, nem ter no banco

}
