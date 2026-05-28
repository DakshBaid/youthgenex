package com.example.youthgenx_backend;

import org.springframework.web.bind.annotation.*;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Map;
import java.util.HashMap;

@RestController
@RequestMapping("/api")
public class AppController {

    @PostMapping("/register")
    public Map<String, String> register(@RequestBody Map<String, String> payload) {
        saveToFile("registrations.txt", payload.toString());
        Map<String, String> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "Registration saved successfully!");
        return response;
    }

    @PostMapping("/contact")
    public Map<String, String> contact(@RequestBody Map<String, String> payload) {
        saveToFile("contacts.txt", payload.toString());
        Map<String, String> response = new HashMap<>();
        response.put("status", "success");
        response.put("message", "Message received!");
        return response;
    }

    @PostMapping("/chat")
    public Map<String, String> chat(@RequestBody Map<String, String> payload) {
        String userMessage = payload.getOrDefault("message", "").toLowerCase();
        String botReply = "Thank you for your message! Our team will get back to you shortly.";
        
        if (userMessage.contains("ids") || userMessage.contains("register")) {
            botReply = "You can register for the Indore Democratic Summit (IDS) 2026 by scrolling to our Registration section!";
        } else if (userMessage.contains("hello") || userMessage.contains("hi") || userMessage.contains("hey")) {
            botReply = "Hello! How can I assist you with YouthGenex today?";
        } else if (userMessage.contains("founder") || userMessage.contains("ansh")) {
            botReply = "YouthGenex was founded by Ansh Jain, a visionary youth empowerment advocate. Under his leadership, we've impacted over 10,000 students!";
        } else if (userMessage.contains("contact") || userMessage.contains("email") || userMessage.contains("reach")) {
            botReply = "You can reach out to us at contact@youthgenex.in, or by using the Contact Form at the bottom of the page.";
        } else if (userMessage.contains("programs") || userMessage.contains("events") || userMessage.contains("do")) {
            botReply = "We organize Model United Nations, Youth Parliaments, Leadership Conferences, and much more! You can see a full list in the 'What We Do' section.";
        } else if (userMessage.contains("impact") || userMessage.contains("stats")) {
            botReply = "We have impacted over 10,000 students and partnered with institutions like the Indore Municipal Corporation and NMIMS!";
        }

        Map<String, String> response = new HashMap<>();
        response.put("reply", botReply);
        return response;
    }

    private void saveToFile(String filename, String content) {
        try (FileWriter fw = new FileWriter(filename, true)) {
            fw.write(content + "\n");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
