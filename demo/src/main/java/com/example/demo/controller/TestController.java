package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.TestService;
import com.example.demo.VO.TestVO;

import jakarta.servlet.http.HttpServletRequest;

@RestController
public class TestController {

	@Autowired
	private TestService testService;
	
	@RequestMapping(value = "/testDatabaseConnection", method = RequestMethod.GET)
    public ResponseEntity<?> selectMember(HttpServletRequest request) {
		List<TestVO> result = testService.selectMember();
		
		return ResponseEntity.ok(result);
    }
}