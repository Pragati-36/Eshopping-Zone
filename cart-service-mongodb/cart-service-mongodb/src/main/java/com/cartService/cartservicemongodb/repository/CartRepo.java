package com.cartService.cartservicemongodb.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.repository.query.Param;

import com.cartService.cartservicemongodb.model.Cart;


public interface CartRepo extends MongoRepository<Cart,String> {
	
	List<Cart> findByUserid(String userid);
}
