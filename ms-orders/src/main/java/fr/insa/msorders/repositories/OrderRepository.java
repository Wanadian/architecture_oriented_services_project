package fr.insa.msorders.repositories;

import fr.insa.msorders.model.entities.Order;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OrderRepository extends MongoRepository<Order, String> {
}
