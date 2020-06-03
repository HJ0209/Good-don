CREATE TABLE Bucket_Range
   (
     Bkt_Range varchar(10) NOT null Primary Key comment '구분(대중소)'
   )
engine=innodb default charset=utf8;

insert into Bucket_Range (Bkt_Range) 
 values ('구분(대중소)');