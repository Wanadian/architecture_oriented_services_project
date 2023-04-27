package fr.insa.msproducts.model.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("product")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    @Id
    private String id;
    private String name;
    private double price;
    private String imgUrl;
    private String description;

    public Product(String name, double price, String imgUrl, String description) {
        this.name = name;
        this.price = price;
        this.imgUrl = imgUrl;
        this.description = description;
    }
}
