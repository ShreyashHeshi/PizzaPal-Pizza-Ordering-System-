show databases;

use pizza_ordering;

show tables;

select * from pizza;
select * from pizza_price;
delete from pizza where name='deleteme1';
delete from pizza_price where pizza_id=9;
select * from role;
select * from user;
desc user;
select * from user_role;
select * from cart_item;
select * from user_address;
drop table role;
drop table user;
drop table user_role;
drop table cart_item;
drop table user_address;
drop table pizza;
drop table pizza_price;

delete from cart_item where id=2;
select * from pizza_price;
drop database pizza_ordering;

insert into pizza values (1,"veg","Delightful combination of onion, capsicum, tomato & grilled mushroom","/Data/pizza.png","Farmhouse");
insert into pizza values (2,"veg","Classic delight with 100% real mozzarella cheese","/Data/pizza.png","Margherita");
insert into pizza values (3,"nonveg","The awesome foursome! Golden corn, black olives, capsicum, red paprika","/Data/pizza.png","Chicken Golden Delight");
insert into pizza values (4,"nonveg","Double pepper barbecue chicken, golden corn and extra cheese, true delight","/Data/pizza.png","Chicken Pepperoni");
insert into pizza values (5,"nonveg","The wholesome flavour of tandoori masala with Chicken tikka, onion, red paprika & mint mayo","/Data/pizza.png","Indi Chicken Tikka");
insert into pizza values (6,"veg","The awesome foursome! Golden corn, black olives, capsicum, red paprika","/Data/pizza.png","Veggie Paradise");


insert into pizza_price values (1,599,399,299);
insert into pizza_price values (2,399,199,99);
insert into pizza_price values (3,460,290,180);
insert into pizza_price values (4,599,349,249);
insert into pizza_price values (5,800,580,320);
insert into pizza_price values (6,550,450,350);

insert into user values ('xyx','xyx','xyx','xyx');


