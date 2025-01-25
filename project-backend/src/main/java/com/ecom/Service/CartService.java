package com.ecom.Service;

import com.ecom.Entity.Cart;
import com.ecom.Repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    public Cart addToCart(Cart newItem) {
        List<Cart> userCart = cartRepository.findByUserId(newItem.getUserId());
        Optional<Cart> existingItem = userCart.stream()
                .filter(item -> item.getProductId().equals(newItem.getProductId()))
                .findFirst();

        if (existingItem.isPresent()) {
            Cart item = existingItem.get();
            item.setQuantity(item.getQuantity() + newItem.getQuantity());
            return cartRepository.save(item);
        } else {
            return cartRepository.save(newItem);
        }
    }

    public List<Cart> getCartByUser(Long userId) {
        return cartRepository.findByUserId(userId);
    }

    public void removeItem(Long cartItemId) {
        cartRepository.deleteById(cartItemId);
    }

    public Cart updateQuantity(Long cartItemId, int quantity) {
        Cart cart = cartRepository.findById(cartItemId).orElseThrow(() -> new RuntimeException("Cart item not found"));
        cart.setQuantity(quantity);
        return cartRepository.save(cart);
    }
    public void clearCart(Long userId) {
        List<Cart> userCart = cartRepository.findByUserId(userId);
        cartRepository.deleteAll(userCart);
    }
}

