package fr.insa.msorders.model.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document("order")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Order {
    @Id
    private String id;
    private Date date;
    private double price;
    private String userId;
    private String[] productsIds;

    public Order(Date date, double price, String[] productsIds, String userId) {
        this.date = date;
        this.price = price;
        this.productsIds = productsIds;
        this.userId = userId;
    }
}
