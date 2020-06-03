package com.example.mybatisdemo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.example.mybatisdemo.dto.BoardDto;
import com.example.mybatisdemo.service.BoardService;

@Controller
public class BoardController {
	
	@Autowired
	private BoardService boardService;
	
	@RequestMapping("/boardList.do")
	public ModelAndView boardList() throws Exception {
		ModelAndView mv = new ModelAndView("/board/boardList");
		List<BoardDto> boardList = boardService.selectBoardList();
		mv.addObject("result", boardList);
		return mv;
	}
	
	@RequestMapping("/boardWrite.do")
	public String boardWrite() throws Exception {
		return "/board/boardWrite";
	}

}
