package fr.insa.msclient.model.dto;

public record UserDTO(String email,
                      String password,
                      String pseudo,
                      String firstname,
                      String lastname) {
}
