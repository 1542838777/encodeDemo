package com.example.decrptdemo.dto;

import lombok.Data;

@Data
public class RequestEncEntity {
	private ReqDataData data = new ReqDataData();
	@Data
	private class ReqDataData {
		private MatchIdDto params = MatchIdDto.build(null);
	}


}
