CREATE TABLE Notice

(
   Notice_No INT auto_increment comment '공지사항 번호',
    Notice_Date DATETIME NOT NULL comment '공지일자',
   Notice_Credate DATE NOT NULL comment '입력일자',
   Notice_Update DATE NOT NULL comment '수정일자',
   Notice_Title VARCHAR(20) NOT NULL comment '제목',
   Notice_Content VARCHAR(250) NOT NULL comment '공지내용',
    primary key(Notice_No)
);

insert into Notice(Notice_Date, Notice_Credate, Notice_Update, Notice_Title, Notice_Content) values(now(),now(),now(), '굳돈서비스를 오픈합니다.', '많이 이용해주세요:)');