package com.example.mybatisdemo.service;

import java.util.List;

import com.example.mybatisdemo.dto.BoardDto;

public interface BoardService {
	
	List<BoardDto> selectBoardList() throws Exception;
	
	void insertBoard(BoardDto board) throws Exception;

}
