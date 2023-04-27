package fr.insa.mspayment.model.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document("payment")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Payment {
    @Id
    private String id;
    private Date date;
    private double price;
    private String clientId;

    public Payment(Date date, double price, String clientId) {
        this.date = date;
        this.price = price;
        this.clientId = clientId;
    }
}
