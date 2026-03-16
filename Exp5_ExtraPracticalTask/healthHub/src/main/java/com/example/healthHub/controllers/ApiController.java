package com.example.healthHub.controllers;

import java.util.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ApiController {
  @GetMapping("status")
  public Map<String,String> getSystemStatus(){
    Map<String,String> mp=new HashMap<>(); 
      mp.put("status","Success");
      mp.put("message","HealthHub API is up and running ");
      return mp;
  }
}
