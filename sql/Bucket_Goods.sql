CREATE TABLE Bucket_Goods
   (
     Mas_Range varchar(10) NOT null,
     Mas_Name varchar(10) NOT NULL,
     Mas_Id varchar(10) NOT NULL Primary Key,
     Mas_Price int(20) NOT NULL,
     Mas_Image blob(500),
     Mas_Fac varchar(10) NOT NULL
   )
 engine=innodb default charset=utf8;