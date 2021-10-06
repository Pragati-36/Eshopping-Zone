package com.mongoconnect.mongospringboot;

import java.util.ArrayList;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mongoconnect.mongospringboot.model.Product;
import com.mongoconnect.mongospringboot.repo.ProductRepo;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api")
public class ProductController {
	@Autowired
	ProductRepo prepo;
	
	//To add any product
	
	//@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/product")
	public ResponseEntity<Product> addProduct(@RequestBody Product product) {
		 try {
			 prepo.save(product);
			    return new ResponseEntity<>(product, HttpStatus.CREATED);
			  } catch (Exception e) {
			    return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			  }
	}
	
	//To get all product
	
	//@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/product")
	public List<Product> getProduct() {
		return prepo.findAll();
	}
	
	//To get product by product Id
	
	@GetMapping("/product/{productid}") 
	public ResponseEntity<Product> getProductById(@PathVariable("productid") String id)   
	{  
		Optional<Product> productdata = prepo.findById(id);
		if (productdata.isPresent()) {
		    return new ResponseEntity<>(productdata.get(), HttpStatus.OK);
		  } else {
		    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		  } 
	}
	
	//To delete product by product Id
	
	@DeleteMapping("/product/{productid}")
	public ResponseEntity<HttpStatus> deleteProductbyId(@PathVariable("productid") String id) {
		try {
			prepo.deleteById(id);
		    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		  } catch (Exception e) {
		    return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		  }
	}
	
	//To delete all product
	
	@DeleteMapping("/deleteAll")
	public ResponseEntity<HttpStatus> deleteAll() {
		 try {
			 	prepo.deleteAll();
			    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			  } catch (Exception e) {
			    return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			  }
	}
	
	//To update a product by product id
	
	@PutMapping("/product/{productid}")
	public ResponseEntity<Product> updateProduct(@PathVariable("productid") String id, @RequestBody Product product) {
		Optional<Product> productdata = prepo.findById(id);
		if (productdata.isPresent()) {
		    Product prod = productdata.get();
		    prod.setProductName(product.getProductName());
		    prod.setCategory(product.getCategory());
		    prod.setDescription(product.getDescription());
		    prod.setImage(product.getImage());
		    prod.setPrice(product.getPrice());
		    prod.setProductType(product.getProductType());
		    return new ResponseEntity<>(prepo.save(prod), HttpStatus.OK);
		  } else {
		    return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		  }
	}
	
	//To get a product by its category
	
	@GetMapping("/productCategory/{category}")
	public List<Product> getByCategory(@PathVariable(value="category") String category) {
		return prepo.findByCategory(category);
		}
	
	//To get a product by its type
	@GetMapping("/productType/{productType}")
	public List<Product> getByType(@PathVariable(value="productType") String productType) {
		return prepo.findByProductType(productType);
		}
	
	//To get a product by its name
	@GetMapping("/productName/{productName}")
	public List<Product> getByName(@PathVariable(value="productName") String productName) {
		return prepo.findByProductName(productName);
		}
}
