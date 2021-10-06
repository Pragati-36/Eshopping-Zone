package com.casestudy.OrderServicemongodb.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.casestudy.OrderServicemongodb.models.Address;
import com.casestudy.OrderServicemongodb.models.Order;
import com.casestudy.OrderServicemongodb.repository.AddressRepository;

@RestController
public class AddressController {

	@Autowired
	AddressRepository addrepo;
	
	@GetMapping("/getAddress")
	public List<Order> getAddress() {
		return addrepo.findAll();
	}
	
	@GetMapping("/address/{userId}")
	public List<Address> getByUserId(@PathVariable(value="userId") String userId) {
		return addrepo.findByuserId(userId);
	}
}
