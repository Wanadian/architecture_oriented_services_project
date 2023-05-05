package fr.insa.apigateway.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "auth-service", url = "http://localhost:8080")
public interface AuthServiceApiClient {
    @GetMapping("/client/auth/valide-token")
    ResponseEntity validateToken(@RequestParam("token") String token);
}
