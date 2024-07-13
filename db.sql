CREATE database project425;
use project425;
SELECT  DATABASE();

CREATE TABLE Coach (
  coach_id int NOT NULL,
  coach_name text not null,
  nationality varchar(255) DEFAULT NULL,
  start_year int DEFAULT NULL,
  num_champion int DEFAULT NULL,
  PRIMARY KEY (coach_id)
);
-- ALTER TABLE Coach  MODIFY COLUMN coach_name text NOT NULL;
INSERT INTO Coach VALUES 
(100001,'Tom Thibodeau','USA',1989,477),
(100002,'Gregg Popovich','USA',1996,1366),
(100003,'Ime Udoka','Nigeria',1997,51),
(100004,'Darko Rajakovic','Serbie',2009,NULL),
(100005,'Erik Spoelstra','Serbie',2008,704),
(100006,' Michael Malone','USA',2001,406),
(100007,' Doc Rivers','USA',1999,1097),
(100008,' Darvin Ham','USA',2008,43),
(100009,' Jason Kidd','USA',2013,273),
(100010,' Taylor Jenkins','USA',2008,179),
(100011,' Frank Vogel','USA',2001,431),
(100012,' Tyronn Lue','USA',2009,261),
(100013,' Steve Kerr','Lebanon',2014,473),
(100014,' Billy Donovan','USA',1989,260),
(100015,'Joe Mazzulla','USA',2011,57),
(100016,' Jamahl Mosley','USA',2005,56);
SELECT * FROM Coach c ;

CREATE TABLE Player (
  player_id int NOT NULL,
  name text  NOT NULL,
  age int DEFAULT NULL,
  team_name text,
  jersey_number int DEFAULT NULL,
  guard_position text,
  height double DEFAULT NULL,
  weight double DEFAULT NULL,
  last_attended text,
  country text,
  salary double DEFAULT NULL,
  introduce text,
  PRIMARY KEY (player_id)
);
INSERT INTO Player VALUES 
(200001,'Precious Achiuwa',24,'New York Knicks',5,'F',2.03,110,'Memphis','Nigeria',855,'Achiuwa was drafted in the first round, 20th pick overall by the Miami Heat in the 2020 NBA Draft...'),
(200002,'Steven Adams',30,'HOUSTON ROKETS',12,'C',2.11,120,'Pittsburgh','New Zealand',798,'Steven Adams is the first ever first-round pick and lottery pick to come out of New Zealand throughout NBA Draft history...'),
(200003,'Bam Adebayo',26,'MIAMI HEAT',13,'C-F',2.06,116,'Kentucky','USA',902,'Edrice Femi Adebayo was born in 1997 in Newark, New Jersey. He goes by the nickname \"Bam\",...'),
(200004,'Ochai Agbaji',23,'TORONTO RAPTORS',30,'G',1.96,98,'Kansas','USA',675,'The Raptors acquired Agbaji and Kelly Olynyk from the Jazz on Thursday in exchange for Kira Lewis, Otto Porter and a 2024 first-round pick, Adrian Wojnarowski of ESPN reports...'),
(200005,'Giannis Antetokounmpo',29,'MILWAUKEE  BUCKS',34,'F-G',2.11,110,'Filathlitikos','Greece',996,'Giannis Sina Ougku Antetokounmpo was born in Athens in 1994. The third oldest o...'),
(200006,'Nikola Jokic',29,'DENVER  NUGGETS',15,'F',2.11,129,'Mega Basket','Serbia',1029,'Jokic was born in 1995 in Sombor, Serbia. Jokic has two older brothers, one of whom played basketball at the University of Detroit...'),
(200007,'Steve Nash',19,'LOS ANGELES LAKERS',13,'PG',1.91,81,'Santa Clara','Canada',1231,'Stephen John Nash OC OBC (born 7 February 1974) is a Canadian professional basketball coach and former player who most re...'),
(200008,'Dirk Nowitzki',22,'DALLAS MAVERICKS',41,'F',2.13,111,'DJK Wurzburg','Germany',1224,'Dirk Werner Nowitzki (German pronunciation: [ˈdɪʁk noˈvɪtski], audioⓘ; born June 19, 1978) is a German former professional basketball pl...'),
(200009,'Kobe Bryant',20,'LOS ANGELES LAKERS',24,'FG',1.98,96,'Lower Merion HS','USA',1990,'Kobe Bean Bryant (/ˈkoʊbi/ KOH-bee; August 23, 1978 – January 26, 2020) was an American professional.'),
(200010,'LeBron James',39,'LOS ANGELES LAKERS',23,'SF',2.06,113,'St. Vincent-St. Mary HS','USA',1856,'LeBron Raymone James Sr. (/ləˈbrɒn/ lə-BRON; born December 30, 1984) is an American professional basketball player for the Los Angeles Lakers of the National Basketball Association (NBA). Nicknamed \"King...'),
(200011,'Derrick Rose',35,'MEMPHIS GRIZZLIES',23,'PG',1.91,91,'Memphis','USA',1723,'Derrick Martell Rose (born October 4, 1988) is an American professional basketball player for the Memphis Grizzlies of the National Basketball Association (NBA). He played one year of college basketball for th...'),
(200012,'Kevin Durant',35,'PHOENIX  SUNS',35,'PF',2.11,109,'Texas','USA',1578,'Kevin Wayne Durant (/dəˈrænt/ də-RANT; born September 29, 1988), also known by his initials KD, is an American professional basketball player for the Phoenix Suns of the National Basketball Association (NBA). Wi...'),
(200013,'Stephen Curry',35,'GOLDEN STATE  WARRIORS',30,'G',1.88,84,'Davidson','USA',1762,'Wardell Stephen Curry II (/ˈstɛfən/ STEF-ən; born March 14, 1988)[1] is an American professional basketball player for the Golden State Warriors of the National Basketball Association (NBA). Wide...'),
(200014,'Russell Westbrook',35,'LA CLIPPERS',0,'PG',1.93,91,'UCLA','USA',1566,'Russell Westbrook III (born November 12, 1988) is an American professional basketball player for the Los Angeles Clippers of the National Basketball Association (NBA). A point guard, Westbrook ...'),
(200015,'James Harden',34,'LA CLIPPERS',1,'G',1.96,100,'Arizona State','USA',1233,'James Edward Harden Jr. (born August 26, 1989) is an American professional basketball player for the Los Angeles Clippers ...');

SELECT * FROM Player p ;

CREATE TABLE Team(
	team_id INT not null,
	team_name TEXT not null,
	city VARCHAR(25),
	year_founded INT,
	coach_id INT, 
	introduce TEXT,
	stadium_name TEXT,
	PRIMARY KEY (team_id), 
	Foreign Key (coach_id) REFERENCES Coach(coach_id) ON DELETE CASCADE
);
-- ALTER table TEAM modify  coach_id int ;
ALTER TABLE Team  ADD CONSTRAINT coach_id FOREIGN KEY (coach_id) REFERENCES Coach(coach_id) ON DELETE CASCADE; 
INSERT INTO Team VALUES 
(300001,'New York Knicks','New York',1946,100001,'The New York Knickerbockers,shortened and more commonly referred to as the New York Knicks,...','Madison Square Garden'),
(300002,'TORONTO RAPTORS','Toronto',1995,100004,'The Toronto Raptors are a Canadian professional basketball team based in Toronto...','Scotiabank Arena'),
(300003,'MIAMI HEAT','Miami',1988,100005,'The Miami Heat are an American professional basketball team based in Miami...','Kaseya Center'),
(300004,'HOUSTON ROKETS','Houston',1967,100003,'The Houston Rockets are an American professional basketball team based in Houston. The Rockets compete in the National Basketball Association...','Toyota Center'),
(300005,'MILWAUKEE BUCKS',' Milwaukee',1968,100007,'The Milwaukee Bucks are an American professional basketball team in Milwaukee. The Bucks compete in the Nation...','Fiserv Forum'),
(300006,'DENVER NUGGETS',' Denver',1976,100006,'The Denver Nuggets are an American professional basketball team based in Denver. The Nuggets compete i...',' Ball Arena'),
(300007,'LOS ANGELES LAKERS','Los Angeles',1948,100008,'The Los Angeles Lakers are an American professional basketball team based in Los Angeles. The Lakers ...','Crypto.com Arena'),
(300008,'DALLAS MAVERICKS','Dallas',1980,100009,'The Dallas Mavericks (often referred to as the Mavs) are an American professional basketball team based in Dallas...','American Airlines Center'),
(300009,'MEMPHIS GRIZZLIES',' Memphis',1995,100010,'The Memphis Grizzlies (referred to locally as the Grizz) are an American professional basketball team based in Memphis, Tennessee....','FedExForum'),
(300010,'PHOENIX SUNS','Phoenix',1968,100011,'The Phoenix Suns are an American professional basketball team based in Phoenix, Arizona. They compete in the National Basketball Association (NBA) as a m...','Footprint Center'),
(300011,'LA CLIPPERS',' Los Angeles',1970,100012,'The Los Angeles Clippers are an American professional basketball team based in Los Angeles. The Clipp...','Crypto.com Arena'),
(300012,'GOLDEN STATE WARRIORS','Golden State',1946,100013,'The Golden State Warriors are an American professional basketball team based in San Francisco. The Warriors compete in the ...','Chase Center'),
(300013,'CHICAGO BULLS','Chicago',1966,100014,'The Chicago Bulls are an American professional basketball team based in Chicago. The Bulls compete in the National Basketball Association (NBA) as a...','United Center'),
(300014,'BOSTON CELTICS','Boston',1946,100015,'The Boston Celtics (/ˈsɛltɪks/ SEL-tiks[a]) are an American professional basketball team based in Boston. The Celtics compete in the National Basketball Association (NBA) as a member of the ...','TD Garden'),
(300015,'ORLANDO MAGIC','Orlando',1989,100016,'The Orlando Magic are an American professional basketball team based in Orlando, Florida. The Magic compete in the National Basketball Association (NBA) as a member of the Southeast Division of the Eastern Con..','Kia Center');

SELECT * FROM Team t ;

CREATE Table Stadium(
	stadium_id INT not null,
	stadium_name TEXT not null,
	Location TEXT, 
	std_size INT,
	PRIMARY KEY(stadium_id)
);
INSERT INTO Stadium VALUES 
(500001,'Madison SquareGarden','Manhattan',76000),
(500002,'Scotiabank Arena','Toronto',61780),
(500003,'Kaseya Center',' Miami',NULL),
(500004,'Toyota Center','Houston',NULL),
(500005,'Fiserv Forum','Wisconsin',66300),
(500006,' Ball Arena','Colorado',62700),
(500007,'Crypto.com Arena','L.A. metro area',88000),
(500008,'American Airlines Cente','Texas',78000),
(500009,'FedExForum','Tennessee',NULL),
(500010,'Footprint Center',' Arizona',NULL),
(500011,'Chase Center','San Francisco',84000),
(500012,'United Center','Chicago',89000),
(500013,'TD Garden','Boston',NULL),
(500014,'Kia Center','Florida',NULL),
(500015,'Frost Bank Center','Texas',69720);

SELECT * FROM Stadium s ;

CREATE TABLE Game(
	game_id INT not null,
	game_season TEXT,
	game_date DATE,
	stadium_id INT, 
	team_home_id INT,
	team_away_id INT,
	score_winner INT, 
	score_loser INT,
	PRIMARY KEY (game_id),
	Foreign Key (team_home_id) REFERENCES Team(team_id) ON DELETE CASCADE,
	Foreign Key (team_away_id) REFERENCES Team(Team_id) ON DELETE CASCADE,
	Foreign Key (stadium_id) REFERENCES Stadium(stadium_id) ON DELETE CASCADE
);
-- ALTER TABLE Game  ADD CONSTRAINT stadium_id FOREIGN KEY (stadium_id) REFERENCES Stadium(stadium_id) ON DELETE CASCADE;
-- ALTER TABLE Game  ADD CONSTRAINT team_away_id FOREIGN KEY (team_away_id) REFERENCES Team(team_id) ON DELETE CASCADE;

INSERT INTO Game VALUES 
(400001,'2023-2024','2023-12-05',500001,300001,300003,98,95),
(400002,'2023-2024','2023-12-06',500002,300002,300003,110,102),
(400003,'2023-2024','2023-12-07',500003,300001,300004,89,87),
(400004,'2023-2024','2023-12-08',500004,300003,300002,120,115),
(400005,'2007-2008','2008-04-20',500005,300005,300003,96,92),
(400006,'2008-2009','2009-04-20',500006,300007,300006,95,92),
(400007,'2010-2011','2010-04-20',500008,300009,300010,102,99),
(400008,'2012-2013','2012-04-20',500009,300011,300014,110,106),
(400009,'2013-2014','2013-04-20',500007,300010,300012,112,108),
(400010,'2014-2015','2014-06-20',500010,300011,300009,96,90),
(400011,'2016-2017','2016-06-20',500011,300012,300009,103,100),
(400012,'2016-2017','2017-07-09',500012,300013,300011,115,112),
(400013,'2017-2018','2018-05-20',500014,300014,300013,104,101),
(400014,'2020-2011','2011-04-21',500015,300015,300014,101,98),
(400015,'2011-2012','2012-03-24',500006,300012,300010,99,97);
SELECT * FROM Game g ;

CREATE Table Season(
	season_id INT not null,
	season_year varchar(255) not null,
	mvp text,
	player_id INT, 
	champion_teamid INT,
	PRIMARY KEY (season_id),
	Foreign Key (player_id) REFERENCES Player(player_id) ON DELETE CASCADE,
	Foreign Key (champion_teamid) REFERENCES Team(team_id) ON DELETE CASCADE
);

INSERT INTO Season VALUES 
(600001,'2018-2019','Giannis Antetokounmpo',200005,300005),
(600002,'2019-2020','Giannis Antetokounmpo',200005,300005),
(600003,'2020-2021','Nikola Jokic',200006,300006),
(600004,'2021-2022','Nikola Jokic',200006,300006),
(600005,'2004-2005','Steve Nash',200007,300007),
(600006,'2005-2006','Steve Nash',200007,300007),
(600007,'2006-2007','Dirk Nowitzki',200008,300008),
(600008,'2007-2008','Kobe Bryant',200009,300007),
(600009,'2008-2009','LeBron James',200010,300007),
(600010,'2009-2010','LeBron James',200010,300007),
(600011,'2010-2011','Derrick Rose',200011,300009),
(600012,'2011-2012','LeBron James',200010,300007),
(600013,'2012-2013','LeBron James',200010,300007),
(600014,'2013-2014','Kevin Durant',200012,300010),
(600015,'2014-2015','Stephen Curry',200013,300012);


SELECT * FROM Season s ;
-- ALTER TABLE Season  ADD CONSTRAINT champion_teamid FOREIGN KEY (champion_teamid) REFERENCES Team(team_id) ON DELETE CASCADE;
-- ALTER TABLE Game  ADD CONSTRAINT team_away_id FOREIGN KEY (team_away_id) REFERENCES Team(team_id) ON DELETE CASCADE;


CREATE Table Player_statistic(
	player_id INT not null,
	game_id INT not null,
	team_id INT not null,
	game_played_count INT,
	min_played DOUBLE,
	points DOUBLE,
	field_goals_made DOUBLE,
	field_goals_attempted DOUBLE,
	field_goals_percentage  DOUBLE,
	3_points_goal_made  DOUBLE,
	3_points_goal_attempted  DOUBLE,
	3_points_goal_Percentage   DOUBLE,
	free_throws_made  DOUBLE,
	free_throws_attempted   DOUBLE,
	free_throw_percentage  DOUBLE,
	offensive_rebounds DOUBLE, 
	defensive_rebounds DOUBLE,
	total_rebounds DOUBLE,
	assists DOUBLE,
	turnovers DOUBLE,
	steels DOUBLE,
	blocks DOUBLE,
	personal_fouls DOUBLE,
	fantacy_points DOUBLE, 
	doubles_doubles DOUBLE,
	triple_doubles DOUBLE,
	PRIMARY KEY(player_id,game_id,team_id), 
	Foreign Key (player_id) REFERENCES Player(player_id)  ON DELETE CASCADE,
	Foreign Key (game_id) REFERENCES game(game_id)  ON DELETE CASCADE,
	Foreign Key (team_id) REFERENCES team (team_id)  ON DELETE CASCADE
);
INSERT INTO Player_statistic VALUES 
(200001,400001,300001,52,1166,421,175,365,49.2,20,79,25.3,51,79,64.6,139,202,6.6,71,56,33,41,99,1102.7,7,0),
(200002,400002,300002,42,1133,361,157,263,59.7,NULL,1,0,47,129,36.4,214,271,485,97,79,36,46,98,1255.5,15,0),
(200003,400003,300003,48,1661,975,471,720,51.5,1,12,8.3,232,300,77.3,107,398,505,198,123,51,48,117,2052,31,2),
(200004,400004,300004,57,1097,316,121,282,42.9,53,159,33.3,21,27,77.8,39,97,136,53,41,30,31,73,700.7,0,0),
(200005,400005,300005,57,1989,1749,653,1060,61.6,27,98,27.6,416,632,65.8,144,495,639,361,198,74,59,166,3258.3,45,7),
(200006,400006,300006,56,1896,1464,576,988,58.3,59,168,35.1,253,311,81.4,164,523,687,519,163,68,51,1444,3260.9,47,18),
(200007,400007,300007,15,313,102,36,94,38.3,8,24,33.3,22,24,91.7,4,25,29,86,7,2,31,18,NULL,NULL,NULL),
(200008,400008,300008,1522,1460,33.8,20.7,7.3,15.6,47.1,1.3,3.4,38,4.8,5.4,87.9,1,6.6,7.5,2.4,0.8,0.8,1.6,2.4,NULL,NULL),
(200009,400009,300009,66,1863,1161,398,1113,45.8,133,467,28.5,232,281,82.6,41,206,247,184,129,62,13,115,1829.4,2,0),
(200010,400010,300010,3,56,41,13,28,46.4,5,12,41.7,10,15,66.7,0,11,11,13,6,1,1,4,73.7,0,0),
(200011,400011,300011,23,394,189,75,163,46,15,41,36.6,24,27,88.9,7,38,45,77,30,8,2,21,358.5,0,0),
(200012,400012,300012,51,1892,1426,517,976,43,113,267,42.3,279,323,86.4,27,313,340,288,165,47,67,95,2443,12,1),
(200013,400013,300013,30,28,6,21,28.6,4,16,25,2,2,100,0,5,5,100,6,1,1,1,NULL,3,1,1),
(200014,400014,300014,56,1285,627,252,557,45.2,37,136,27.2,86,129,66.7,79,213,292,252,117,62,21,97,1487.4,7,0),
(200015,400015,300015,51,1765,884,257,579,44.4,142,343,41.4,228,259,88,23,240,263,421,132,58,45,100,2008.1,16,1);
SELECT * FROM Player_statistic ps ;
-- ALTER TABLE Player_statistic  ADD CONSTRAINT team_id FOREIGN KEY (team_id) REFERENCES team(team_id) ON DELETE CASCADE;

-- 创建索引--

SELECT * FROM Team t ;
-- Check if there is any information about this team
CREATE index idx_team_name on team (team_name(25)); 
-- Find out more about your team's home 
CREATE  index idx_staduim_name on team(stadium_name(25));
-- Check which team is available through the city
CREATE  index idx_city_team on team(city(25));

SHOW INDEXES FROM Team  ;

SELECT * from Stadium s ;
-- Find out which city the course is in by name
-- Find the course name by city
CREATE  index idx_stadium_location on Stadium(stadium_name(25));
CREATE  index idx_stadium_name on Stadium(location(25));

SHOW INDEXES FROM Stadium  ;

SELECT * FROM Season s ;
-- 查询mvp的球员信息
-- 查询某个赛季的信息

-- Search for mvp player information
-- Query information about a season
CREATE  index idx_player_name on  Season(MVP(25));
CREATE  index idx_season_year on  Season(season_year(25));

SHOW INDEXES FROM Season  ;

SELECT * FROM Player p ;
-- 通过球员的名字查询
-- 通过球队查询
-- 通过国家查询
-- 通过薪资查询
-- Search by player's name
-- Search by team
-- Search by country
-- Through salary inquiries

CREATE  index idx_player_info on  player(name(25));
CREATE  index idx_player_team on  player(team_name(25));
CREATE  index idx_player_country on  player(country(25));
CREATE  index idx_player_sal on  player(salary);
SHOW INDEXES FROM Player  ;

SELECT * FROM Player p ;

SELECT * FROM Game g  ;
-- 通过赛季查询game信息
-- 通过日期查询game信息

-- Query game information by season
-- Query game information by date
CREATE  index idx_game_season on  game(game_season(25));
CREATE  index idx_game_date on  game(game_date);
show indexes from Game;


SELECT * FROM Coach c ;
-- 通过教练姓名查询信息
-- 通过教练国籍查询信息

-- Search for information by coach name
-- Search for information by coach nationality
CREATE  index idx_coach_name on  Coach(coach_name(25));
CREATE  index idx_coach_area on  Coach(nationality(25));
SHOW INDEXES FROM Coach  ;
SELECT * FROM Player p  ;

-- view ---
-- 球队信息列表
SELECT t.Team_Name, t.Introduce, t.city, t.Year_founded, c.Coach_Name, s.Stadium_Name, COUNT( DISTINCT p.player_id ) as plyaer_num, COUNT(DISTINCT se.Champion_TeamID) AS num_champion
FROM Team t
LEFT JOIN Coach c ON t.Coach_ID = c.Coach_ID
LEFT JOIN Stadium s ON t.Stadium_Name = s.Stadium_Name
LEFT JOIN Season se ON t.Team_ID = se.Champion_TeamID
LEFT JOIN Player p on t.team_name  = p.team_name
-- WHERE t.Team_Name = 'MIAMI HEAT'
GROUP BY t.Team_ID;

-- Team information list
CREATE view  view_team_list as 
SELECT t.team_id, t.Team_Name, t.Introduce, t.city, t.Year_founded, c.Coach_Name, s.Stadium_Name, COUNT( DISTINCT p.player_id ) as num_player , COUNT(DISTINCT se.Champion_TeamID) AS num_champion
FROM Team t
LEFT JOIN Coach c ON t.Coach_ID = c.Coach_ID
LEFT JOIN Stadium s ON t.Stadium_Name = s.Stadium_Name
LEFT JOIN Season se ON t.Team_ID = se.Champion_TeamID
LEFT JOIN Player p on t.team_name  = p.team_name
GROUP BY t.Team_ID;
SELECT * FROM view_team_list vtl ;
SELECT * FROM team t ;
SELECT * FROM player p ;
SELECT * FROM Season s ;
DROP view view_team_list ;
ALTER table Season drop column year; 

-- 球员基础信息列表
SELECT p.*, COUNT(se.MVP) AS MVP_Times
FROM Player p

LEFT JOIN Season se ON p.Player_ID = se.Player_ID
-- WHERE p.Name = 'Giannis Antetokounmpo'
GROUP BY p.Player_ID;

-- Player basic information list 
CREATE VIEW VIEW_PLAYER_LIST AS 
SELECT p.*, COUNT(se.MVP) AS MVP_Times
FROM Player p
LEFT JOIN Season se ON p.Player_ID = se.Player_ID
GROUP BY p.Player_ID;
--  WHERE p.Name = 'Giannis Antetokounmpo'
SELECT * FROM  view_player_list vpl ;


SELECT * FROM game g ;
-- 体育场赛事列表
SELECT g.game_date,s.*, g.Game_ID, g.Score_winner, g.Score_loser
FROM Stadium s
LEFT JOIN Team t ON s.Stadium_Name = t.Stadium_Name
LEFT JOIN Game g ON s.Stadium_ID = g.Stadium_ID
-- WHERE s.Stadium_Name = 'Crypto.com Arena'
ORDER BY g.game_date  DESC ;

-- List of stadium events 
CREATE VIEW VIEW_STADIUM_LIST AS 
SELECT g.game_date,s.*, g.Game_ID, g.Score_winner, g.Score_loser
FROM Stadium s
LEFT JOIN Team t ON s.Stadium_Name = t.Stadium_Name
LEFT JOIN Game g ON s.Stadium_ID = g.Stadium_ID
ORDER BY g.game_date  DESC ;

SELECT * FROM  view_stadium_list vsl ;

-- 教练详情--
SELECT  c.*, t.Team_Name
FROM Coach c
JOIN Team t ON c.Coach_ID = t.Coach_ID;

-- WHERE c.Coach_Name = ' Michael Malone';

-- Coach list
CREATE VIEW VIEW_COACH_LIST AS 
SELECT c.*, t.Team_Name
FROM Coach c
JOIN Team t ON c.Coach_ID = t.Coach_ID ;

SELECT * FROM view_coach_list vcl ;
SELECT * FROM team t ;
SELECT  * FROM Coach c ;


SELECT * FROM game g ;
SELECT g.*, t1.Team_Name AS Home_Team, t2.Team_Name AS Away_Team
FROM Game g
JOIN Team t1 ON g.team_home_id  = t1.Team_ID
JOIN Team t2 ON g.team_away_id  = t2.Team_ID;
-- WHERE g.Game_ID = '5';

-- game list -- 
CREATE VIEW VIEW_GAME_LIST AS 
SELECT g.*, t1.Team_Name AS Home_Team, t2.Team_Name AS Away_Team,s.stadium_name
FROM Game g
JOIN Team t1 ON g.team_home_id  = t1.Team_ID
JOIN Team t2 ON g.team_away_id  = t2.Team_ID
JOIN Stadium s  ON g.stadium_id  = s.stadium_id ORDER BY g.game_id;

SELECT * FROM view_game_list vgl ;
DROP view VIEW_GAME_LIST;

-- 赛季mvp列表
SELECT * FROM Season s ;

SELECT s.*, p.Name AS MVP_Player, t.Team_Name AS Champion_Team, COUNT(DISTINCT g.Game_ID) AS Num_Games
FROM Season s
left JOIN Player p ON s.MVP = p.Name
left JOIN Team t ON s.Champion_TeamID = t.Team_ID
left JOIN Game g ON s.season_year  = g.Game_Season
GROUP BY s.season_id  ORDER BY s.season_year  DESC ;
-- WHERE s.Season_ID = '8';

-- List of Season mvp -- 
CREATE VIEW VIEW_SEASON_MVP_LIST AS 
SELECT s.*, p.Name AS MVP_Player, t.Team_Name AS Champion_Team
FROM Season s
left JOIN Player p ON s.MVP = p.Name
left JOIN Team t ON s.Champion_TeamID = t.Team_ID
left JOIN Game g ON s.season_year  = g.Game_Season
ORDER BY s.season_year  DESC ;

SELECT * FROM view_season_mvp_list vsml ;

-- mvp球员列表
SELECT p.name , COUNT(*) AS mvp_get_count,p.age ,p.jersey_number ,p.guard_position ,p.country ,p.salary 
FROM Player p
JOIN Season s ON p.Player_ID = s.Player_ID
GROUP BY p.Player_ID
ORDER BY mvp_get_count DESC ;

-- List of mvp players
CREATE VIEW VIEW_MVP_PLAYER_LIST AS 
SELECT p.name , COUNT(*) AS mvp_get_count,p.age ,p.jersey_number ,p.guard_position ,p.country ,p.salary 
FROM Player p
JOIN Season s ON p.Player_ID = s.Player_ID
GROUP BY p.Player_ID
ORDER BY mvp_get_count DESC ;

SELECT * FROM view_mvp_player_list vmpl ;


-- 球员薪资排名
SELECT p.player_id ,p.name,p.age ,p.team_name ,p.jersey_number ,p.guard_position ,p.country ,p.salary ,
RANK () OVER(ORDER by salary DESC) AS SALAY_RANK  FROM player p ;

-- Player salary rankings
CREATE VIEW VIEW_PLAYER_SALARY_LIST AS 
SELECT p.player_id ,p.name,p.age ,p.team_name ,p.jersey_number ,p.guard_position ,p.country ,p.salary , 
RANK () OVER(ORDER by salary DESC) AS 'salary_rank' ,
ROUND(PERCENT_RANK() OVER(ORDER by salary DESC),2)*100 AS 'salary_per_rank'
FROM player p ;

SELECT  * FROM view_player_salary_list vpsl ;
DROP view view_player_salary_list;


-- 存储过程
-- 球队信息列表 
SELECT t.Team_Name, t.Introduce, t.city, t.Year_founded, c.Coach_Name, s.Stadium_Name, COUNT( DISTINCT p.player_id ) as plyaer_num, COUNT(DISTINCT se.Champion_TeamID) AS num_champion
FROM Team t
LEFT JOIN Coach c ON t.Coach_ID = c.Coach_ID
LEFT JOIN Stadium s ON t.Stadium_Name = s.Stadium_Name
LEFT JOIN Season se ON t.Team_ID = se.Champion_TeamID
LEFT JOIN Player p on t.team_name  = p.team_name
-- WHERE t.Team_Name = 'MIAMI HEAT'
GROUP BY t.Team_ID;
-- 查询某个球队的信息


drop PROCEDURE get_team_info;

SELECT  * FROM view_team_list vtl WHERE vtl.Team_Name LIKE 'mIAMI%';

-- Query information about a team
CREATE PROCEDURE get_team_info (in p_team_name varchar(255))
 BEGIN
    SELECT * FROM view_team_list 
    WHERE  team_name LIKE CONCAT(p_team_name,'%')  ;
 END ;
CALL get_team_info('mIAMI H');
view_
-- 教练模块

-- 
SELECT * FROM  Stadium s 
-- 需求list
-- 球队模块
	-- 列表，view_team_list vtl 
	-- 增删改查 get_team_info
-- 球员模块
	-- 列表，view_player_list vpl 
    -- 球员工资信息列表,view_player_salary_list
	-- 球员mvp信息列表，view_mvp_player_list
	-- 球员比赛数据明细列表，get_player_detail_info(:p_player_id, :p_game_id, :p_team_id) 
	-- 增删改查 get_player_info
-- 教练模块
	-- 列表view_coach_list
	-- 增删改查 
-- 比赛模块
	-- 列表，view_game_list
	-- 赛季有哪些比赛game，CALL get_game_season_info('2023');
	-- 增删改查 
-- 球场模块
	-- 列表，view_stadium_list
	-- 增删改查
-- 赛季模块
	-- 列表，view_season_mvp_list
	-- 增删改查


SELECT  * FROM  view_team_list vtl ;


SELECT * FROM  view_player_list vpl WHERE vpl.name LIKE 'Giannis An%';
DROP procedure get_player_info;

-- Player basic information 
CREATE PROCEDURE get_player_info (IN p_name VARCHAR(255))
BEGIN
	SELECT * FROM VIEW_PLAYER_LIST 
	WHERE name LIKE CONCAT(p_name,'%') ;
END;

CALL get_player_info('Giannis An');

-- 查询赛季情况
SELECT * FROM view_game_list vgl WHERE vgl.game_season like '2023%';

-- Check the season 
CREATE PROCEDURE get_game_season_info (IN p_season VARCHAR(255))
BEGIN
	SELECT * FROM VIEW_GAME_LIST
	WHERE game_season LIKE CONCAT(p_season,'%') ;
END;

CALL get_game_season_info('2023');

-- 根据playerid查询球员的详细信息
SELECT p.name ,g.game_season ,t.team_name,ps.*
FROM  Player_statistic ps
LEFT JOIN player p on ps.player_id = p.player_id 
LEFT JOIN game g ON ps.game_id =g.game_id 
LEFT JOIN team t  ON ps.team_id =t.team_id 
-- where 1=1;
-- WHERE ps.player_id ='200001' or ps.game_id ='400001' or ps.team_id ='300001';
WHERE ps.player_id =NULL or ps.game_id ='400001' or ps.team_id ='300001';



drop  PROCEDURE get_player_detail_info;


-- Query player details according to playerid
CREATE PROCEDURE get_player_detail_info(  
    IN p_player_id INT,  
    IN p_game_id INT,  
    IN p_team_id INT  
)  
BEGIN  
    SET @sql = NULL;  
    SET @where_clause = '';  
  
    IF p_player_id IS NOT NULL THEN  
        SET @where_clause = CONCAT(@where_clause, ' AND ps.player_id = ', p_player_id);  
    END IF;  
  
    IF p_game_id IS NOT NULL THEN  
        SET @where_clause = CONCAT(@where_clause, ' AND ps.game_id = ', p_game_id);  
    END IF;  
  
    IF p_team_id IS NOT NULL THEN  
        SET @where_clause = CONCAT(@where_clause, ' AND ps.team_id = ', p_team_id);  
    END IF;  
  
    IF LENGTH(@where_clause) > 0 THEN  
        SET @where_clause = SUBSTRING(@where_clause, 5); -- Remove the leading ' AND '  
    ELSE  
        SET @where_clause = '1=1'; -- No conditions, so select all rows  
    END IF;  
  
    SET @sql = CONCAT(  
        'SELECT p.name, g.game_season, t.team_name, ps.* ',  
        'FROM Player_statistic ps ',  
        'LEFT JOIN player p ON ps.player_id = p.player_id ',  
        'LEFT JOIN game g ON ps.game_id = g.game_id ',  
        'LEFT JOIN team t ON ps.team_id = t.team_id ',  
        'WHERE ', @where_clause  
    );  
  
    PREPARE stmt FROM @sql;  
    EXECUTE stmt;  
    DEALLOCATE PREPARE stmt;  
END;
-- Call the stored procedure and pass the parameters
CALL get_player_detail_info(200001,400001,300001);
CALL get_player_detail_info(NULL,400001,NULL);
CALL get_player_detail_info(NULL,NULL,NULL);

-- 调用存储过程并传递参数  
CALL get_player_detail_info(200001,400001,300001);
CALL get_player_detail_info(NULL,400001,NULL);
CALL get_player_detail_info(NULL,NULL,NULL);


CREATE PROCEDURE proc_del_player_detail(  
    IN p_player_id INT,  
    IN p_game_id INT,  
    IN p_team_id INT  
)  
BEGIN  
    SET @sql = NULL;  
    SET @where_clause = '';  
  
    IF p_player_id IS NOT NULL THEN  
        SET @where_clause = CONCAT(@where_clause, 'AND  ps.player_id = ', p_player_id);  
    ELSE
    	SIGNAL SQLSTATE '45000' SET  message_text='Invalid where condition';
    END IF;
  
    IF p_game_id IS NOT NULL THEN  
        SET @where_clause = CONCAT(@where_clause, ' AND ps.game_id = ', p_game_id);  
    ELSE
    	SIGNAL SQLSTATE '45000' SET  message_text='Invalid where condition';
    END IF;
  
    IF p_team_id IS NOT NULL THEN  
        SET @where_clause = CONCAT(@where_clause, ' AND ps.team_id = ', p_team_id);  
    ELSE
    	SIGNAL SQLSTATE '45000' SET  message_text='Invalid where condition';  
    END IF;
  	SET @where_clause = SUBSTRING(@where_clause, 5);
    SET @sql = CONCAT(  
        'DELETE FROM  Player_statistic ps ',  
        'WHERE ', @where_clause  
    );  
  
    PREPARE stmt FROM @sql;  
    EXECUTE stmt;  
    DEALLOCATE PREPARE stmt;  
END;
drop  PROCEDURE proc_del_player_detail;

SELECT * FROM game g ;

SELECT * FROM view_player_salary_list vpsl ;
SELECT * FROM view_season_mvp_list vsml  ;
SELECT * FROM Season s ;

SHOW TRIGGERS;

CREATE EVENT update_player_ages  
ON SCHEDULE EVERY 1 YEAR  
STARTS TIMESTAMP(CURDATE(), '00:00:00') 
DO  
BEGIN  
    UPDATE players  
    SET age = YEAR(CURDATE()) - YEAR(birthdate); 
END;
SET GLOBAL event_scheduler = ON;

SELECT * FROM player p ;
SELECT * FROM  Player_statistic ps  ;
SELECT * FROM team t ;
SELECT * FROM game g ;
SELECT * FROM Season s ;
SELECT * FROM Stadium s ;

ALTER TABLE Player_statistic  DROP COLUMN game_played;
DELETE FROM Stadium WHERE stadium_id<500001;

CREATE TRIGGER triger_update_team_player_name 
AFTER UPDATE ON stadium
FOR EACH ROW  
BEGIN  
    UPDATE team
    SET team.stadium_name  = NEW.stadium_name
    WHERE team.stadium_name  = OLD .stadium_name;  
END;  

-- This trigger checks for duplicate names before inserting a new player into the Player table.
CREATE TRIGGER trger_check_duplicate_player
BEFORE INSERT ON Player
FOR EACH ROW
BEGIN
  IF EXISTS (SELECT 1 FROM Player WHERE Name = NEW.Name) THEN
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'Duplicate player names are not allowed.';
  END IF;
END;

SELECT * FROM Coach c ;

SELECT * FROM music m ;

INSERT INTO project425.music
(id, song, singer, created)
VALUES(0, 'apple', 'meng', '2024-05-01');

SELECT * FROM  view_coach_list vcl ;
SELECT * FROM  view_team_list vtl ;



DELETE FROM team WHERE team_id=0;

SELECT * from team t ; 
SELECT * FROM game g ;
SELECT * FROM Coach c ;
SELECT * FROM Stadium s ;
SELECT * FROM view_game_list vgl ;
SELECT * FROM view_stadium_list vsl ;
SELECT * FROM Stadium s ;
SELECT * FROM Season s ;
SELECT * FROM player p ;
SELECT * FROM view_season_mvp_list vsml ;
SELECT * FROM view_player_list vpl ;
SELECT * FROM view_player_salary_list vpsl ;
SELECT * FROM Player_statistic ps ;

INSERT INTO Player_statistic VALUES 
(200001,400002,300001,52,1166,421,175,365,49.2,20,79,25.3,51,79,64.6,139,202,6.6,71,56,33,41,99,1102.7,7,0);

SELECT * FROM  Player_statistic  WHERE player_id =200001 and game_id =400002 and team_id =300001;
DELETE FROM Player_statistic ps WHERE ps.player_id =200001 and ps.game_id =400002 and ps.team_id =0;
CALL proc_del_player_detail(200001,400002,300001);


SELECT * FROM view_player_salary_list vpsl ;
SELECT * FROM view_mvp_player_list vmpl ;





SELECT * from team t ; 
SELECT * FROM player p ;
SELECT * FROM game g ;
SELECT * FROM Coach c ;
SELECT * FROM Stadium s ;
SELECT * FROM view_game_list vgl ;
SELECT * FROM view_stadium_list vsl ;
SELECT * FROM Stadium s ;
SELECT * FROM Season s ;

SELECT * FROM view_season_mvp_list vsml ;
SELECT * FROM view_player_list vpl ;
SELECT * FROM view_player_salary_list vpsl ;
SELECT * FROM Player_statistic ps ;
