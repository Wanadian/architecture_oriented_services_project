package fr.insa.mspayment.controllers;

import fr.insa.mspayment.model.dto.PaymentDto;
import fr.insa.mspayment.model.entities.Payment;
import fr.insa.mspayment.repositories.PaymentRepository;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.servers.Server;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
@RequestMapping("/pay")
@SecurityRequirement(name = "bearerAuth")
@OpenAPIDefinition(servers = {@Server(url = "http://localhost:8080/payment", description = "localhost server")})
public class PaymentController {

    private final PaymentRepository paymentRepository;

    public PaymentController(PaymentRepository paymentRepository) {
        this.paymentRepository = paymentRepository;
    }

    @PostMapping()
    public ResponseEntity<Payment> pay(@RequestBody PaymentDto paymentDto){
        boolean verify = verifyCard(paymentDto);
        if (!verify){
            return new ResponseEntity<>(null, HttpStatus.CONFLICT);
        }
        Payment payment = new Payment(new Date(), paymentDto.price(), paymentDto.clientId());
        Payment save = paymentRepository.save(payment);
        return new ResponseEntity<>(save, HttpStatus.CREATED);
    }

    private boolean verifyCard(PaymentDto paymentDto){
        return paymentDto.cardNumber().length() == 6 && paymentDto.cardLimitDate().matches("\\d\\d/\\d\\d") && paymentDto.cardSecret().length() == 2;
    }
}
