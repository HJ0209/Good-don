CREATE TABLE CustomerService
(
    Cs_No INT(10) auto_increment,
    Cs_Credate DATE NOT NULL,
    Cs_Title VARCHAR(20) NOT NULL,
    Cs_Askcontent VARCHAR(300) NOT NULL DEFAULT '0',
    Cust_Id VARCHAR(30) NOT NULL,
    Cs_Answerdate DATETIME NOT NULL,
    Cs_Answercontent VARCHAR(300) NULL,
    Cs_Answer VARCHAR(10) NULL,    
    PRIMARY KEY (Cs_No)
);

insert into CustomerService(Cs_Credate, Cs_Title, Cs_Askcontent, Cust_Id, Cs_Answerdate, Cs_Answercontent, Cs_Answer) 
values(sysdate(), '배송문의', '주문번호 20200602-4 배송 언제 되나요?', 'sj0590', sysdate(), '당일 배송되었습니다.', 'CS_1팀' );