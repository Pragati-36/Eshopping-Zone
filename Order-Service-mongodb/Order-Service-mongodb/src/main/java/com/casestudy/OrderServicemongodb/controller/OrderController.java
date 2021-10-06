package com.casestudy.OrderServicemongodb.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.casestudy.OrderServicemongodb.models.Address;
import com.casestudy.OrderServicemongodb.models.Order;

import com.casestudy.OrderServicemongodb.repository.OrderRepository;



@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {
	
	@Autowired
	OrderRepository orderrepo;
	
	//To get all order
	
	@GetMapping("/getOrder")
	public List<Order> getOrder() {
		return orderrepo.findAll();
	}
	
	//To add an order
	
	@PostMapping("/saveOrder")
	public ResponseEntity<Order> addOrder(@RequestBody Order order) {
		 try {
			 orderrepo.save(order);
			    return new ResponseEntity<>(order, HttpStatus.CREATED);
			  } catch (Exception e) {
			    return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			  }
	}
	
	//To get order by order id
	
	@GetMapping("/orderId/{orderId}") 
	public ResponseEntity<Order> getOrderById(@PathVariable("orderId") String id)   
	{  
		Optional<Order> productdata = orderrepo.findById(id);
		if (productdata.isPresent()) {
		    return new ResponseEntity<>(productdata.get(), HttpStatus.OK);
		  } else {
		    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		  } 
	}
	
	//To get order by user id
	
	@GetMapping("/orderUser/{userId}")
	public List<Order> getByUserId(@PathVariable(value="userId") String userId) {
		return orderrepo.findByuserId(userId);
		
	}
	
	//To delete order by order id
	
	@DeleteMapping("/order/{orderId}")
	public ResponseEntity<HttpStatus> deleteOrderbyId(@PathVariable("orderId") String id) {
		try {
			orderrepo.deleteById(id);
		    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		  } catch (Exception e) {
		    return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		  }
	}
	
	//To update order by order id
	
	@PutMapping("/order/{orderId}")
	public ResponseEntity<Order> updateOrder(@PathVariable("orderId") String id, @RequestBody Order order) {
		Optional<Order> userdata = orderrepo.findById(id);
		if (userdata.isPresent()) {
		    Order prod = userdata.get();
		    prod.setOrderDate(order.getOrderDate());
		    prod.setUserId(order.getUserId());
		    prod.setAmountPaid(order.getAmountPaid());
		    prod.setModeOfPayment(order.getModeOfPayment());
		    prod.setOrderStatus(order.getOrderStatus());
		    prod.setMobileNumber(order.getMobileNumber());
		    prod.setFlatNumber(order.getFlatNumber());
		    prod.setCity(order.getCity());
		    prod.setPincode(order.getPincode());
		    prod.setState(order.getState());
		    return new ResponseEntity<>(orderrepo.save(prod), HttpStatus.OK);
		  } else {
		    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		  }
	}
	
}
