package com.example.healthHub.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {
  @GetMapping("/home")
  public String getHomePage(Model model){
    model.addAttribute("title","Welcome to Healthhub Dashboard");
    return "index";
  }
}
