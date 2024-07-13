# 1 数据库方面

- 演示数据库的设计，包括几个表，几个视图，几个存储过程及窗口查询函数的应用(大概的过一下就行）,关键点：窗口函数和存储过程等
  
```sql
-- Player salary rankings --窗口函数
CREATE VIEW VIEW_PLAYER_SALARY_LIST AS 
SELECT p.player_id ,p.name,p.age ,p.team_name ,p.jersey_number ,p.guard_position ,p.country ,p.salary , 
RANK () OVER(ORDER by salary DESC) AS 'salary_rank' ,
ROUND(PERCENT_RANK() OVER(ORDER by salary DESC),2)*100 AS 'salary_per_rank'
FROM player p ;
-- test
SELECT  * FROM view_player_salary_list vpsl ;
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
-- test
-- Call the stored procedure and pass the parameters
CALL get_player_detail_info(200001,400001,300001);
CALL get_player_detail_info(NULL,400001,NULL);
CALL get_player_detail_info(NULL,NULL,NULL);
``` 

# 2 工程代码方面
- 这是一个全栈项目，服务端使用python+django+mysql；前端使用vue3+vue-element-plus-admin。
- 服务端介绍：
  - 看数据库的orm模型配置，在backend/restfulapi/models.py中，演示一下。
  - 看数据库连接配置，在backend/backend/settings.py中，演示一下。
  - 看路由配置情况，在backend/restfulapi/url.py中，演示一下。
  - 看序列化配置情况，在backend/restfulapi/serializers.py中，演示一下。
  - 看业务逻辑及返给前端逻辑配置情况，backend/restfulapi/views.py中，演示一下。
- 前端介绍：
  - 依赖库及执行命令配置情况，在frontend/package.json里，演示一下
  - 看代码位置，在frontend/src/views里，选一个文件演示一下内容
  - 看前端的接口调用，在frontend/src/api里，选一个文件演示一下内容
  - 菜单及图标展示，在frontend/src/router/index.ts里，选一个文件演示一下内容
- 项目运行介绍：
  - 前端主要命令：
    - yarn ，安装依赖包
    - yarn dev，运行项目
    - yarn lint:eslint ，自动格式化代码
    - yarn build:pro，生产环境打包
  - 服务端这样命令：
    - python manage.py makemigrations restfulapi ，数据库表同步
    - python manage.py migrate restfulapi ， 数据库表同步
    - python manage.py runserver ，服务启动
  - 项目整体打包
    - build.sh， 将前端项目的dist包拷贝到服务端对应目录下，然后启动服务端
  - 项目运行地址：xxxx:8080
  
# 3 项目演示
  - 菜单,按钮及图标展示
  - 每个模块的增删改查
  - 着重关注player模块的排名

# 4 其他 ，时间10分钟以上

