create database friendships;
use friendships;
drop database friendships;

create table users(
id int not null auto_increment,
first_name varchar(45),
last_name varchar(45),
created_at datetime,
updated_at datetime,
primary key (id)
);

INSERT INTO users (id, first_name, last_name, created_at, updated_at)
VALUES
(1, 'Amy', 'Giver', NOW(), NOW()),
(2, 'Eli', 'Byers', NOW(), NOW()),
(3, 'Big', 'Bird', NOW(), NOW()),
(4, 'Kermit', 'The Frog', NOW(), NOW()),
(5, 'Marky', 'Mark', NOW(), NOW());

create table friendships(
id int not null auto_increment,
user_id int not null,
friend_id int not null,
created_at datetime,
updated_at datetime,
primary key (id),
foreign key (user_id) references users(id),
foreign key (friend_id) references users(id)
);

INSERT INTO friendships (user_id, friend_id, created_at, updated_at)
VALUES
(1, 2, NOW(), NOW()), -- Amy -> Eli
(1, 3, NOW(), NOW()), -- Amy -> Big
(1, 4, NOW(), NOW()), -- Amy -> Kermit
(2, 4, NOW(), NOW()), -- Eli -> Kermit
(2, 5, NOW(), NOW()), -- Eli -> Marky
(5, 3, NOW(), NOW()); -- Marky -> Big

SELECT u.first_name,u.last_name,f.first_name AS friend_first_name,f.last_name AS friend_last_name
FROM friendships fs
JOIN users u
ON fs.user_id = u.id
JOIN users f
ON fs.friend_id = f.id;

INSERT INTO users (id, first_name, last_name, created_at, updated_at)
VALUES
(6, 'jj', 'Gam', NOW(), NOW()),
(7, 'leen', 'tyers', NOW(), NOW()),
(8, 'bread', 'board', NOW(), NOW()),
(9, 'khader', 'mo', NOW(), NOW()),
(10, 'jamil', 'habash', NOW(), NOW()),
(11, 'hover', 'board', NOW(), NOW());

