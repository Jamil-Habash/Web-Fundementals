create database setup;
use setup;

create table tests(
id int primary key auto_increment,
name varchar(20)
);

insert into tests values(1,"Jamil Habash");
insert into tests values(2,"Habash Jamil");

select * from tests;

update tests set name = "Jam Hab"
where tests.id = 2; 

Delete from tests where tests.id = 2;
