package com.casestudy.OrderServicemongodb.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.casestudy.OrderServicemongodb.models.Address;
import com.casestudy.OrderServicemongodb.models.Order;

public interface AddressRepository extends MongoRepository<Order,String> {
	
	List<Address> findByuserId(String userId);
}
