package fr.insa.mspayment.model.dto;

import java.util.Date;

public record PaymentDto(String cardNumber,
                         String cardLimitDate,
                         String cardSecret,
                         double price,
                         String clientId) {
}
