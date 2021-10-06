package com.mongoconnect.mongospringboot.repo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.mongoconnect.mongospringboot.model.Product;


public interface ProductRepo extends MongoRepository<Product,String> {
	List<Product> findByCategory(String category);
	List<Product> findByProductType(String productType);
	List<Product> findByProductName(String productName);
}
