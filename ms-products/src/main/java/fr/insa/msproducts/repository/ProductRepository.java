package fr.insa.msproducts.repository;

import fr.insa.msproducts.model.entity.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepository extends MongoRepository<Product, String> {
}
