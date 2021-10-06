package com.casestudy.OrderServicemongodb;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;


import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;


import com.casestudy.OrderServicemongodb.models.Order;
import com.casestudy.OrderServicemongodb.repository.OrderRepository;

@SpringBootTest
@RunWith(SpringRunner.class)
@TestMethodOrder(OrderAnnotation.class)
class OrderServiceMongodbApplicationTests {
	
	@Autowired
	private OrderRepository orderrepo;
	
	@Test
	public void orderCreate() {
		Order order = new Order();
		order.setOrderId("1");
		order.setOrderStatus("Completed");
		order.setAmountPaid(120);
		order.setModeOfPayment("Wallet");
		order.setUserId("123");
		orderrepo.save(order);
		assertNotNull(orderrepo.findById("1").get());
		
	}
	
}
