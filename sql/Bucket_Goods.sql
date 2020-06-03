CREATE TABLE Bucket_Goods
   (
     Mas_Name varchar(10) NOT NULL comment '버킷이름',
     Mas_Id varchar(10) NOT NULL comment '버킷ID',
     Mas_Price varchar(20) NOT NULL comment '총가격',
     Mas_Image text(200) comment 'blob 이미지 저장',
     Mas_Fac varchar(10) NOT NULL comment '제조사',
     PRIMARY KEY (Mas_Id)
   )
 engine=innodb default charset=utf8 comment='버킷 상품 테이블';
   
 insert into Bucket_Goods(Mas_Name, Mas_Id, Mas_Price, Mas_Image, Mas_Fac) 
 values ('버킷이름 #1', 'bucket001', '0', '이미지 저장', '제조사');
