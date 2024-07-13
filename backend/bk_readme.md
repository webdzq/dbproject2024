orm 同步：

python manage.py makemigrations restfulapi
python manage.py migrate restfulapi

服务启动

python manage.py runserver

前端代码格式校正

yarn lint:eslint

interface api：[Project API](http://127.0.0.1:8000/swagger)


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
