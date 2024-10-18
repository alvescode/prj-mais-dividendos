package com.maisdividendos.stock_api.dtos;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StockPriceRequest {
    private String ticker;
}
