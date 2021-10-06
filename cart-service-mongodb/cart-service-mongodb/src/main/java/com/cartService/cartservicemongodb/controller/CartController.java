package com.cartService.cartservicemongodb.controller;

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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cartService.cartservicemongodb.model.Cart;
import com.cartService.cartservicemongodb.repository.CartRepo;
import com.cartService.cartservicemongodb.repository.ItemRepo;



@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class CartController {
	
	@Autowired
	CartRepo crepo;
	
	@Autowired
	ItemRepo irepo;
	
	//To get All carts 
	@GetMapping("/getAllCart")
	public List<Cart> getAllCart() {
		return crepo.findAll();
	}
	
	//To add any cart
	@PostMapping("/addCart")
	public ResponseEntity<Cart> addCart(@RequestBody Cart cart) {
		 try {
			 crepo.save(cart);
			    return new ResponseEntity<>(cart, HttpStatus.CREATED);
			  } catch (Exception e) {
			    return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			  }
	}
	
	//To get cart by cart Id
	@GetMapping("/cartId/{cartId}") 
	public ResponseEntity<Cart> getCartById(@PathVariable("cartId") String id)   
	{  
		Optional<Cart> cartdata = crepo.findById(id);
		if (cartdata.isPresent()) {
		    return new ResponseEntity<>(cartdata.get(), HttpStatus.OK);
		  } else {
		    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		  } 
	}
	
	//To update cart by cart Id
	@PutMapping("/cart/{cartId}")
	public ResponseEntity<Cart> updateCart(@PathVariable("cartId") String id, @RequestBody Cart cart) {
		Optional<Cart> productdata = crepo.findById(id);
		if (productdata.isPresent()) {
		    Cart prod = productdata.get();
		    prod.setTotalPrice(cart.getTotalPrice());
		    prod.setProductName(cart.getProductName());
		    prod.setPrice(cart.getPrice());
		    prod.setQuantity(cart.getQuantity());
		    return new ResponseEntity<>(crepo.save(prod), HttpStatus.OK);
		  } else {
		    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		  }
	}
	
	//To delete cart by cart Id
	@DeleteMapping("/cart/{cartId}")
	public ResponseEntity<HttpStatus> deleteCartbyId(@PathVariable("cartId") String id) {
		try {
			crepo.deleteById(id);
		    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		  } catch (Exception e) {
		    return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		  }
	}
	
	//To get cart by user id
	@GetMapping("/cart/{userid}")
	public List<Cart> getByUserid(@PathVariable(value="userid") String userid) {
		return crepo.findByUserid(userid);
		}

}
