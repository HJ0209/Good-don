package com.example.mybatisdemo.dto;

import lombok.Data;

@Data
public class BoardDto {
	private int boardIdx;
	private String title;
	private String contents;
	private int hitCnt;
	private String creatorId;
	private String createdDt;
	private String updaterId;
	private String updatedDt;
}
