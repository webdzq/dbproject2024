from django.conf.urls import url 
from restfulapi import views 

urlpatterns = [ 
    url(r'^api/team/getList$', views.team_get_list), 
    url(r'^api/team/add$', views.team_get_list), 
    url(r'^api/team/update$', views.team_get_list),
    url(r'^api/team/delete$', views.team_get_list),
    url(r'^api/coach/kv$', views.get_coach_kv), 
    url(r'^api/stadium/list$', views.get_stadium_list), 
    
    url(r'^api/coach/getList$', views.coach_get_list), 
    url(r'^api/coach/add$', views.coach_get_list), 
    url(r'^api/coach/update$', views.coach_get_list),
    url(r'^api/coach/delete$', views.coach_get_list),
    
    url(r'^api/game/getList$', views.game_get_list), 
    url(r'^api/game/add$', views.game_get_list), 
    url(r'^api/game/update$', views.game_get_list),
    url(r'^api/game/delete$', views.game_get_list),
    
    url(r'^api/stadium/getList$', views.stadium_get_list), 
    url(r'^api/stadium/add$', views.stadium_get_list), 
    url(r'^api/stadium/update$', views.stadium_get_list),
    url(r'^api/stadium/delete$', views.stadium_get_list),
    
    url(r'^api/season/getList$', views.season_get_list), 
    url(r'^api/season/add$', views.season_get_list), 
    url(r'^api/season/update$', views.season_get_list),
    url(r'^api/season/delete$', views.season_get_list),
    
    url(r'^api/player/getList$', views.player_get_list), 
    url(r'^api/player/add$', views.player_get_list), 
    url(r'^api/player/update$', views.player_get_list),
    url(r'^api/player/delete$', views.player_get_list),
    url(r'^api/player/kv$', views.get_player_kv),
    url(r'^api/player/detail$', views.get_player_detail),
    url(r'^api/playerDetail/delete$', views.get_playerDetail_list),
    url(r'^api/playerDetail/add$', views.get_playerDetail_list),
    url(r'^api/playerDetail/update$', views.get_playerDetail_list),
    url(r'^api/playerSalary/getList$', views.get_player_salary_list),
    url(r'^api/playerMVP/getList$', views.get_player_mvp_list)
]