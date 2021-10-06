package com.casestudy.OrderServicemongodb.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.casestudy.OrderServicemongodb.models.Address;
import com.casestudy.OrderServicemongodb.models.Order;



public interface OrderRepository extends MongoRepository<Order,String> {
	
	List<Order> findByuserId(String userId);

	

}
