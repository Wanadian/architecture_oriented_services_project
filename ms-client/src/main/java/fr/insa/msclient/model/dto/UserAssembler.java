package fr.insa.msclient.model.dto;

import fr.insa.msclient.model.User;

public class UserAssembler {
    public static User fromDto(UserDTO userDTO){
        return new User(userDTO.email(), userDTO.password(), userDTO.pseudo(), userDTO.firstname(), userDTO.lastname());
    }
}
