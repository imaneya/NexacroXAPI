package com.example.demo.mapper;


import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.VO.TestVO;

@Mapper
public interface TestMapper {
	List<TestVO> selectMember();
}