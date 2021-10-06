package com.mongoconnect.mongospringboot.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Product {
	
	@Id
	private String productid;
	private String productType;
	private String productName;
	private String category;
	private String image;
	private double price;
	private String description;
	public String getProductid() {
		return productid;
	}
	public void setProductid(String productid) {
		this.productid = productid;
	}
	public String getProductType() {
		return productType;
	}
	public void setProductType(String productType) {
		this.productType = productType;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Product(String productid, String productType, String productName, String category, String image, double price,
			String description) {
		super();
		this.productid = productid;
		this.productType = productType;
		this.productName = productName;
		this.category = category;
		this.image = image;
		this.price = price;
		this.description = description;
	}
	
	public Product() {
		
	}
	
	
}
