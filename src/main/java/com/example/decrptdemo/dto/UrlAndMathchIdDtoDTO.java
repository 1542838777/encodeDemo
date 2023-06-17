package com.example.decrptdemo.dto;

import lombok.Data;

@Data
public class UrlAndMathchIdDtoDTO {

	//--分析-盈亏-必发
	private String url = "odds/betfair/trade/info";
	private MatchIdDto body;

	public static UrlAndMathchIdDtoDTO build(String matchId)  {
		UrlAndMathchIdDtoDTO bfdto = new UrlAndMathchIdDtoDTO();
		MatchIdDto data = MatchIdDto.build(matchId);
		bfdto.setBody(data);

		return bfdto;
	}

}
