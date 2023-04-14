package fr.insa.msclient.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("users")
@Getter
@Setter
@NoArgsConstructor
public class User {
    @Id
    private String id;

    private String email;
    private String password;
    private String pseudo;
    private String firstname;
    private String lastname;

    public User(String id, String email, String password, String pseudo, String firstname, String lastname) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.pseudo = pseudo;
        this.firstname = firstname;
        this.lastname = lastname;
    }

    public User(String email, String password, String pseudo, String firstname, String lastname) {
        this.email = email;
        this.password = password;
        this.pseudo = pseudo;
        this.firstname = firstname;
        this.lastname = lastname;
    }
}
