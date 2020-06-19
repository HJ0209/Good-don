package com.example.mybatisdemo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mybatisdemo.dto.BoardDto;
import com.example.mybatisdemo.mapper.BoardMapper;

@Service
public class BoardServicelmpl implements BoardService {
	
	
	@Autowired
	private BoardMapper boardMapper;

	@Override
	public List<BoardDto> selectBoardList() throws Exception {
		// TODO Auto-generated method stub
		return boardMapper.selectBoardList();
	}
	
	@Override
	public void insertBoard(BoardDto board) throws Exception {
		boardMapper.insertBoard(board);
	}

}
