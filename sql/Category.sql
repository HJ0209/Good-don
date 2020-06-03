CREATE TABLE Category
(
   Bkt_Range   VARCHAR (10) NOT NULL comment '구분(대중소)',
    Cate_Name   VARCHAR (10) NOT NULL comment '구분이름',
    PRIMARY KEY (Cate_Name),
    constraint FK_Bkt_Range Foreign key(Bkt_Range) references Bucket_Range(Bkt_Range) 
    ON UPDATE CASCADE ON DELETE CASCADE
    ) 
engine=innodb default charset=utf8 comment='카테고리 코드관리 테이블';