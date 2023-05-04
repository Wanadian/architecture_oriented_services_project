package fr.insa.msclient.controllers;

import fr.insa.msclient.model.Role;
import fr.insa.msclient.model.dto.GenerateTokenDTO;
import fr.insa.msclient.model.dto.UserCredentials;
import fr.insa.msclient.model.dto.UserDTO;
import fr.insa.msclient.services.AuthService;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.servers.Server;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@OpenAPIDefinition(servers = {@Server(url = "http://localhost:8080/client", description = "localhost server")})
@SecurityRequirement(name = "bearerAuth")
public class AuthController {
    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity addNewUser(@RequestBody UserDTO userDTO){
        authService.registerUser(userDTO);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @PutMapping("/login")
    public ResponseEntity<GenerateTokenDTO> getToken(@RequestBody UserCredentials userCredentials){
        GenerateTokenDTO generateTokenDTO = new GenerateTokenDTO(userCredentials.email(), authService.generateToken(userCredentials.email(), userCredentials.password()));
        return new ResponseEntity<>(generateTokenDTO, HttpStatus.OK);
    }

    @GetMapping("/valide-token")
    public ResponseEntity validateToken(@RequestParam("token") String token){
        return new ResponseEntity<>(authService.validateToken(token) ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/authorization")
    public ResponseEntity<Role> authorization(@RequestParam("email") String email){
        return new ResponseEntity<>(authService.authorize(email), HttpStatus.OK);
    }
}
