package com.ecom.Controller;

import com.ecom.Entity.User;
import com.ecom.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")

// connect to frontend:

@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user)
    {
        Map<String, String> response = new HashMap<>();

        if (user.getEmail() == null || user.getEmail().isEmpty()) {
            response.put("message", "Email is required!");
            return ResponseEntity.badRequest().body(response);
        }

        if (userService.loginUser(user.getEmail(), user.getPassword()).isPresent()) {
            response.put("message", "Email is already taken!");
            return ResponseEntity.badRequest().body(response);
        }

        User registeredUser = userService.registerUser(user);
        response.put("message", "User registered successfully");
        response.put("email", registeredUser.getEmail());
        return ResponseEntity.ok(response);
    }
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user) {
        Optional<User> loggedInUser = userService.loginUser(user.getEmail(), user.getPassword());

        Map<String, Object> response = new HashMap<>();
        if (loggedInUser.isPresent()) {
            User foundUser = loggedInUser.get();
            response.put("message", "Login successful");
            response.put("id", foundUser.getId());
            response.put("email", foundUser.getEmail());
            return ResponseEntity.ok(response);
        } else {
            response.put("message", "Invalid email or password");
            return ResponseEntity.status(401).body(response);
        }
    }
}

