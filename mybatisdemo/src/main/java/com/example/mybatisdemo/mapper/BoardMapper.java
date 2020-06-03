package com.example.mybatisdemo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.mybatisdemo.dto.BoardDto;

@Mapper
public interface BoardMapper {
	
	List<BoardDto> selectBoardList() throws Exception;
	
	void insertBoard(BoardDto board) throws Exception;

}
