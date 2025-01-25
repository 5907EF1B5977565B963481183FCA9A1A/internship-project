package com.ecom.Controller;

import com.ecom.Entity.Cart;
import com.ecom.Service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cart")

@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class CartController {

    @Autowired
    private CartService cartService;

    @PostMapping("/add")
    public ResponseEntity<Cart> addToCart(@RequestBody Cart cart) {
        Cart addedItem = cartService.addToCart(cart);
        return ResponseEntity.ok(addedItem);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Cart>> getCartByUser(@PathVariable Long userId) {
        List<Cart> cartItems = cartService.getCartByUser(userId);
        return ResponseEntity.ok(cartItems);
    }

    @DeleteMapping("/remove/{cartItemId}")
    public ResponseEntity<?> removeFromCart(@PathVariable Long cartItemId) {
        cartService.removeItem(cartItemId);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/update/{cartItemId}")
    public ResponseEntity<Cart> updateCartItemQuantity(@PathVariable Long cartItemId, @RequestParam int quantity) {
        Cart updatedItem = cartService.updateQuantity(cartItemId, quantity);
        return ResponseEntity.ok(updatedItem);
    }
}

