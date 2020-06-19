package com.example.mybatisdemo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.example.mybatisdemo.dto.BoardDto;
import com.example.mybatisdemo.service.BoardService;

@Controller // 어노테이션을 붙여줌으로써 해당 클래스를 컨트롤러로 동작하게 만듦
public class BoardController {
	
	@Autowired
	private BoardService boardService; // 비즈니스 로직을 처리하는 서비스 빈 연결
	
	@RequestMapping("/boardList.do")
	public ModelAndView boardList() throws Exception {
		ModelAndView mv = new ModelAndView("/board/boardList");
		List<BoardDto> boardList = boardService.selectBoardList();
		mv.addObject("resultList", boardList);
		return mv;
	}
	
	@RequestMapping("/boardWrite.do")
	public String boardWrite() throws Exception {
		return "/board/boardWrite";
	}

}
