package com.example.decrptdemo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EncReqPm {
	private MatchIdDto body;
	private Header header;

	public static EncReqPm build() {
		return new EncReqPm(MatchIdDto.build(null), new Header());
	}
}
