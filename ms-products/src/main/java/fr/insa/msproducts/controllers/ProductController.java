package fr.insa.msproducts.controllers;

import fr.insa.msproducts.model.dto.ProductDTO;
import fr.insa.msproducts.model.entity.Product;
import fr.insa.msproducts.repository.ProductRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/ms-products/product")
public class ProductController {
    private final ProductRepository productRepository;

    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @GetMapping()
    public List<Product> getAll(){
        return productRepository.findAll();
    }

    @GetMapping("/{id}")
    public Product getById(@PathVariable String id){
        return productRepository.findById(id).orElse(null);
    }

    @PostMapping()
    public Product create(@RequestBody ProductDTO productDTO){
        return productRepository.save(new Product(productDTO.name(), productDTO.price(), productDTO.imgUrl(), productDTO.description()));
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id){
        productRepository.deleteById(id);
    }

    @PutMapping("/{id}")
    public Product update(@PathVariable String id, @RequestBody ProductDTO productDTO){
        Product product = productRepository.findById(id).get();
        product.setDescription(productDTO.description());
        product.setName(productDTO.name());
        product.setPrice(productDTO.price());
        product.setImgUrl(productDTO.imgUrl());
        productRepository.save(product);
        return product;
    }
}
