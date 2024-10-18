package com.maisdividendos.stock_api.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class StockPriceResponse {
    private String ticker;
    private String price;
    private String lastUpdate;
}
