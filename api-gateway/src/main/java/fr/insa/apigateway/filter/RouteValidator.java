package fr.insa.apigateway.filter;

import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.function.Predicate;

@Component
public class RouteValidator {

    public static final List<String> openApiEndpoints = List.of(
            "/api/v1/client/auth/login",
            "/api/v1/client/auth/register",
            "/api/v1/client/auth/valide-token",
            "/api/v1/products/product",
            "/eureka",
            "/client/v3/api-docs",
            "/products/v3/api-docs",
            "/orders/v3/api-docs",
            "/payment/v3/api-docs",
            "/webjars/swagger-ui"
    );

    public Predicate<ServerHttpRequest> isSecured =
            request -> openApiEndpoints
                    .stream()
                    .noneMatch(uri -> request.getURI().getPath().contains(uri));

}