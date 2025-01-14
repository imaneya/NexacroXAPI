package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.mapper.TestMapper;
import com.example.demo.VO.TestVO;

@Service
public class TestService {

	@Autowired
	private TestMapper testMapper;

	public List<TestVO> selectMember() {
		List<TestVO> vos = testMapper.selectMember();
		return vos;
	}
}