package com.example.decrptdemo.dto;

import lombok.Data;

@Data
public class FormatJddParams {
	private MatchIdDto data = MatchIdDto.build(null);
	private boolean jdd = true;
	private String url = "odds/betfair/trade/info";


}
