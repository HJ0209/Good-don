CREATE TABLE People
(
   Cust_No    INT (10) NOT NULL comment '회원 번호',
    Cust_Id    VARCHAR (30) NOT NULL comment '회원ID',
    Cust_Mail    VARCHAR (30) NOT NULL comment '메일 아이디',
    Cust_Nic   VARCHAR (10) NOT NULL comment '닉네임',
    
    PRIMARY KEY (Cust_Id)
) engine=innodb default charset=utf8 comment='회원 관리 테이블';