package com.cartService.cartservicemongodb.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document
public class Cart {
	@Id
	private String cartId;
	private String userid;
	private Double totalPrice;
	private String productName;
	private double price;
	private int quantity;
	
	
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getCartId() {
		return cartId;
	}
	public void setCartId(String cartId) {
		this.cartId = cartId;
	}
	public Double getTotalPrice() {
		return totalPrice;
	}
	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}
	
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public Cart() {}
	public Cart(String cartId, String userid, Double totalPrice, String productName, double price, int quantity) {
		super();
		this.cartId = cartId;
		this.userid = userid;
		this.totalPrice = totalPrice;
		this.productName = productName;
		this.price = price;
		this.quantity = quantity;
	}
	
	
}
