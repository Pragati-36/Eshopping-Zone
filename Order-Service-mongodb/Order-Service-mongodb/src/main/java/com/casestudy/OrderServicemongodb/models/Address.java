package com.casestudy.OrderServicemongodb.models;

import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Address {
	
	private String userId;
	private String fullName;
	private Long mobilenum;
	private int flatNumber;
	private String city;
	private int pincode;
	private String state;
	
	public Address(String userId, String fullName, Long mobilenum, int flatNumber, String city, int pincode,
			String state) {
		super();
		this.userId = userId;
		this.fullName = fullName;
		this.mobilenum = mobilenum;
		this.flatNumber = flatNumber;
		this.city = city;
		this.pincode = pincode;
		this.state = state;
	}
	
	public Address() {
		
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public Long getMobilenum() {
		return mobilenum;
	}
	public void setMobilenum(Long mobilenum) {
		this.mobilenum = mobilenum;
	}
	public int getFlatNumber() {
		return flatNumber;
	}
	public void setFlatNumber(int flatNumber) {
		this.flatNumber = flatNumber;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public int getPincode() {
		return pincode;
	}
	public void setPincode(int pincode) {
		this.pincode = pincode;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	

}
