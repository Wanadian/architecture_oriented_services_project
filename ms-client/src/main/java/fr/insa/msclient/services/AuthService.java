package fr.insa.msclient.services;

import fr.insa.msclient.model.User;
import fr.insa.msclient.model.dto.UserAssembler;
import fr.insa.msclient.model.dto.UserDTO;
import fr.insa.msclient.repositories.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;
    private JwtService jwtService;

    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtService jwtService) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
    }

    public void registerUser(UserDTO userDTO){
        User user = UserAssembler.fromDto(userDTO);
        user.setPassword(passwordEncoder.encode(userDTO.password()));
        userRepository.save(user);
    }

    public String generateToken(String email, String password){
        User user = userRepository.findByEmail(email);
        String encodedPassword = passwordEncoder.encode(password);
        if (user == null || !encodedPassword.equals(user.getPassword())){
            return "";
        }
        return jwtService.generateToken(email);
    }

    public String validateToken(String token){
        return jwtService.validateToken(token) ? "valid" : "invalid";
    }
}
