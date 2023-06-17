package com.example.decrptdemo.dto;

import lombok.Data;

@Data
public class Header {
	private String uuid = "rvon9l17cp1j11sgbak019lldwz5rim0z10g";
	private String platformCode = "h5mobile";
	private String appVersion = "4.0.2";
	private String platformVersion = "4.0.2";
	private String userID = "";
	private int userType = 1;
	private String cmdName = "h5_itou";
	private int cmdId = 0;
	private String token = "";
	// getters and setters here
}