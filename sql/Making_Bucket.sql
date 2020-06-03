CREATE TABLE Making_Bucket
   (
     List_No int(10) NOT null comment '버킷관리번호',
     Mas_Id varchar(10) NOT NULL comment '버킷ID',
     Cust_Id varchar(30) NOT NULL comment '회원ID',
     List_Paycount int(10) NOT NULL default 0 comment '납입횟수',
     List_Payprice int(20) NOT NULL comment '월금액',
     List_Nowcount int(10) NOT NULL comment '현재횟수',
     List_Startdate date NULL comment '시작일자',
     List_Credate date NOT NULL comment '입력일자',
     List_Update date NULL comment '수정일자',

        PRIMARY KEY (List_No),
		constraint FK_Mas_Id Foreign key(Mas_Id) references Bucket_Goods(Mas_Id) ON UPDATE CASCADE ON DELETE CASCADE,
        constraint FK_Cust_Id Foreign key(Cust_Id) references People(Cust_Id) ON UPDATE CASCADE ON DELETE CASCADE
   	

   ) engine=innodb default charset=utf8 comment='버킷만들기테이블';
    