package com.cartService.cartservicemongodb;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.cartService.cartservicemongodb.model.Cart;
import com.cartService.cartservicemongodb.repository.CartRepo;



@SpringBootTest
@RunWith(SpringRunner.class)
@TestMethodOrder(OrderAnnotation.class)
class CartServiceMongodbApplicationTests {
	
	@Autowired
	private CartRepo crepo;
	
	@Test
	@Order(1)
	public void cartCreate() {
		Cart cart = new Cart();
		cart.setCartId("1");
		cart.setTotalPrice(123);
		crepo.save(cart);
		assertNotNull(crepo.findById("1").get());
		
	}
	
	@Test
	@Order(2)
	public void cartRead() {
		Cart cart=crepo.findById("1").get();
		assertEquals(123,cart.getTotalPrice());
	}
	
	@Test
	@Order(3)
	public void cartUpdate() {
		Cart cart=crepo.findById("1").get();
		cart.setTotalPrice(120);
		crepo.save(cart);
		assertNotEquals(123,crepo.findById("1").get().getTotalPrice());
	}
	

}
