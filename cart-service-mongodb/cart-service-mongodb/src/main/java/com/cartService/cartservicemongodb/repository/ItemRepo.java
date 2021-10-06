package com.cartService.cartservicemongodb.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.cartService.cartservicemongodb.model.Item;

public interface ItemRepo extends MongoRepository<Item,String>  {

}
