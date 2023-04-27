package fr.insa.apigateway.filter;

import fr.insa.apigateway.client.AuthServiceApiClient;
import org.apache.http.HttpHeaders;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

@Component
public class AuthenticationFilter extends AbstractGatewayFilterFactory<AuthenticationFilter.Config> {
    private final RouteValidator validator;
    private final AuthServiceApiClient authClient;

    public AuthenticationFilter(RouteValidator validator, AuthServiceApiClient authClient) {
        super(Config.class);
        this.validator = validator;
        this.authClient = authClient;
    }

    @Override
    public GatewayFilter apply(Config config) {
        return ((exchange, chain) -> {
            if (validator.isSecured.test(exchange.getRequest())) {
                if (!exchange.getRequest().getHeaders().containsKey(HttpHeaders.AUTHORIZATION)) {
                    throw new RuntimeException("missing authorization header");
                }

                String authHeader = exchange.getRequest().getHeaders().get(HttpHeaders.AUTHORIZATION).get(0);
                if (authHeader != null && authHeader.startsWith("Bearer ")) {
                    authHeader = authHeader.substring(7);
                }
                try {
                    ResponseEntity responseEntity = authClient.validateToken(authHeader);
                    if(responseEntity.getStatusCode() == HttpStatus.BAD_REQUEST){
                        throw new RuntimeException("token invalid");
                    }
                } catch (Exception e) {
                    System.out.println("invalid access !");
                    throw new RuntimeException("invalid access to the application");
                }
            }
            return chain.filter(exchange);
        });
    }

    public static class Config {

    }
}
