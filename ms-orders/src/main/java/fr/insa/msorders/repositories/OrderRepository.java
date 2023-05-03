package fr.insa.msorders.repositories;

import fr.insa.msorders.model.entities.Order;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface OrderRepository extends MongoRepository<Order, String> {
    List<Order> findByUserEmail(String userEmail);
}
