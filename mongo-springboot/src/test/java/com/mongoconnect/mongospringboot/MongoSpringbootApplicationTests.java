package com.mongoconnect.mongospringboot;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

import java.util.List;

import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.mongoconnect.mongospringboot.model.Product;
import com.mongoconnect.mongospringboot.repo.ProductRepo;

@SpringBootTest
@RunWith(SpringRunner.class)

@TestMethodOrder(OrderAnnotation.class)
class MongoSpringbootApplicationTests {

	@Autowired 
	private ProductRepo prepo;
	
	
	@Test
	@Order(1)
	public void productCreate() {
		Product product = new Product();
		product.setProductid("1");
		product.setProductType("beauty");
		product.setProductName("Lipstick");
		product.setCategory("beauty");
		product.setImage("link");
		product.setPrice(123);
		product.setDescription("desc");
		prepo.save(product);
		assertNotNull(prepo.findById("1").get());
	}
	
	@Test
	@Order(2)
	public void productRead() {
		Product product=prepo.findById("1").get();
		assertEquals("beauty",product.getProductType());
	}
	
	@Test
	@Order(3)
	public void productUpdate() {
		Product product=prepo.findById("1").get();
		product.setCategory("Beauty");
		prepo.save(product);
		assertNotEquals("beauty",prepo.findById("1").get().getCategory());
	}

}
