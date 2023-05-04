package fr.insa.msorders.controllers;

import fr.insa.msorders.model.dto.OrderDto;
import fr.insa.msorders.model.entities.Order;
import fr.insa.msorders.repositories.OrderRepository;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.servers.Server;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order")
@SecurityRequirement(name = "bearerAuth")
@OpenAPIDefinition(servers = {@Server(url = "http://localhost:8080/orders", description = "localhost server")})
public class OrderController {
    private final OrderRepository orderRepository;

    public OrderController(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    @GetMapping()
    public List<Order> getAll(){
        return orderRepository.findAll();
    }

    @GetMapping("/{id}")
    public Order getById(@PathVariable String id){
        return orderRepository.findById(id).orElse(null);
    }

    @GetMapping("/user/{email}")
    public List<Order> getByUserId(@PathVariable String email) {
        return orderRepository.findByUserEmail(email);
    }

    @PostMapping()
    public Order create(@RequestBody OrderDto orderDto){
        return orderRepository.save(new Order(orderDto.date(), orderDto.price(), orderDto.productsIds(), orderDto.userEmail()));
    }
}
