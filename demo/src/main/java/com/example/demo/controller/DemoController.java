package com.example.demo.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
 
@Controller
public class DemoController {
	
    @RequestMapping("/")
    public String home() {
        System.out.println("JSP 파일 반환만 되게 해주세요...");
                   
        return "index";
    }
    
    @RequestMapping("/CustomerList/initdata")
    public String initdata() {
        System.out.println("JSP 파일 반환만 되게 해주세요...");
                   
        return "/CustomerList/initdata";
    }
    
    @RequestMapping("/CustomerList/search")
    public String search() {
        System.out.println("JSP 파일 반환만 되게 해주세요...");
                   
        return "/CustomerList/search";
    }
    
    @RequestMapping("/CustomerList/save_list")
    public String save_info() {
        System.out.println("JSP 파일 반환만 되게 해주세요...");
                   
        return "/CustomerList/save_list";
    }
    
    @RequestMapping("/CustomerList/database")
    public String database() {
        System.out.println("JSP 파일 반환만 되게 해주세요...");
                   
        return "/CustomerList/database";
    }
}
