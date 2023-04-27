package fr.insa.mspayment.repositories;

import fr.insa.mspayment.model.entities.Payment;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PaymentRepository extends MongoRepository<Payment, String> {

}
