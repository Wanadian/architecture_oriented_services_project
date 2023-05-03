package fr.insa.msorders.controllers;

import fr.insa.msorders.model.dto.OrderDto;
import fr.insa.msorders.model.entities.Order;
import fr.insa.msorders.repositories.OrderRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/ms-orders/order")
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
