from django.db import models
# from restfulapi import models
# from multiselectfield import MultiSelectField
# from django.contrib.primary_key_field import MultiFieldPrimaryKey
# Create your models here.
class Coach(models.Model):
    coach_id = models.IntegerField(primary_key=True)
    coach_name = models.TextField()
    nationality = models.CharField(max_length=255, blank=True, null=True)
    start_year = models.IntegerField(blank=True, null=True)
    num_champion = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Coach'


       
class Season(models.Model):
    season_id = models.IntegerField(primary_key=True)
    season_year = models.CharField(max_length=255)
    mvp = models.TextField(blank=True, null=True)
    player_id = models.ForeignKey('Player', models.DO_NOTHING,  db_column='player_id',blank=True, null=True)
    champion_teamid = models.ForeignKey('Team', models.DO_NOTHING, db_column='champion_teamid', blank=True, null=True)
    # year = models.CharField(db_column='Year', max_length=50, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'Season'


class Stadium(models.Model):
    stadium_id = models.IntegerField(primary_key=True)
    stadium_name = models.TextField()
    location = models.TextField(db_column='Location', blank=True, null=True)  # Field name made lowercase.
    std_size = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Stadium'


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'





class LogTest(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=20)

    class Meta:
        managed = False
        db_table = 'log_test'


class Player(models.Model):
    player_id = models.IntegerField(primary_key=True)
    name = models.TextField()
    age = models.IntegerField(blank=True, null=True)
    team_name = models.TextField(blank=True, null=True)
    jersey_number = models.IntegerField(blank=True, null=True)
    guard_position = models.TextField(blank=True, null=True)
    height = models.FloatField(blank=True, null=True)
    weight = models.FloatField(blank=True, null=True)
    last_attended = models.TextField(blank=True, null=True)
    country = models.TextField(blank=True, null=True)
    salary = models.FloatField(blank=True, null=True)
    introduce = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'player'


class Team(models.Model):
    team_id = models.IntegerField(primary_key=True)
    team_name = models.TextField()
    city = models.CharField(max_length=25, blank=True, null=True)
    year_founded = models.IntegerField(blank=True, null=True)
    coach = models.ForeignKey(Coach, models.DO_NOTHING, blank=True, null=True)
    # coach_name = models.TextField(blank=True, null=True)
    introduce = models.TextField(blank=True, null=True)
    stadium_name = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'team'
class Music(models.Model):
    song = models.CharField(max_length=100,default='')
    singer = models.CharField(max_length=100,default='')
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        managed = False
        db_table = 'music'
        
class ViewCoachList(models.Model):
    coach_id = models.IntegerField(primary_key=True)
    coach_name = models.TextField()
    nationality=models.CharField(max_length=255)
    start_year=models.IntegerField()
    num_champion=models.IntegerField()
    team_name=models.TextField()
    
    class Meta:
        managed = False
        db_table = 'view_coach_list'
class ViewTeamList(models.Model):
    year_founded = models.IntegerField()
    team_name = models.TextField()
    team_id = models.IntegerField(primary_key=True)
    city=models.CharField(max_length=255)
    num_champion=models.IntegerField()
    num_player=models.IntegerField()
    coach_name=models.TextField()
    stadium_name=models.TextField()
    introduce =models.TextField()
    
    class Meta:
        managed = False
        db_table = 'view_team_list'

class ViewGameList(models.Model):
    game_id = models.IntegerField(primary_key=True)
    game_season = models.TextField()
    stadium_id = models.IntegerField()
    team_home_id = models.IntegerField()
    team_away_id = models.IntegerField()
    game_date = models.DateField(blank=True, null=True)
    score_winner=models.IntegerField()
    score_loser=models.IntegerField()
    home_team=models.TextField()
    away_team=models.TextField()
    stadium_name=models.TextField()
    class Meta:
        managed = False
        db_table = 'view_game_list'
class ViewSeasonMvpList(models.Model):
    season_id = models.IntegerField(primary_key=True)
    season_year = models.TextField()
    player_id=models.IntegerField()
    champion_teamid=models.IntegerField()
    mvp=models.TextField()
    mvp_player=models.TextField()
    champion_team=models.TextField()
    class Meta:
        managed = False
        db_table = 'view_season_mvp_list'
class Game(models.Model):
    game_id = models.IntegerField(primary_key=True)
    game_season = models.TextField(blank=True, null=True)
    game_date = models.DateField(blank=True, null=True)
    stadium_id = models.IntegerField()
    team_home_id= models.IntegerField()
    team_away_id= models.IntegerField()
    # stadium= models.ForeignKey(Stadium, models.DO_NOTHING, blank=True)
    # team_home = models.ForeignKey(Team, models.DO_NOTHING, blank=True,related_name='team_home_id')
    # team_away = models.ForeignKey(Team, models.DO_NOTHING, blank=True, related_name='team_away_id')
    score_winner = models.IntegerField(blank=True, null=True)
    score_loser = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'game'
class PlayerStatistic(models.Model):
    player_id = models.ForeignKey(Player,models.DO_NOTHING, db_column='player_id',blank=True, null=True)
    game_id = models.ForeignKey(Game, models.DO_NOTHING,db_column='game_id',blank=True, null=True)
    team_id = models.ForeignKey(Team, models.DO_NOTHING,db_column='team_id',blank=True, null=True)
    game_played_count = models.IntegerField(blank=True, null=True)
    min_played = models.FloatField(blank=True, null=True)
    points = models.FloatField(blank=True, null=True)
    field_goals_made = models.FloatField(blank=True, null=True)
    field_goals_attempted = models.FloatField(blank=True, null=True)
    field_goals_percentage = models.FloatField(blank=True, null=True)
    number_3_points_goal_made = models.FloatField(db_column='3_points_goal_made', blank=True, null=True)  # Field renamed because it wasn't a valid Python identifier.
    number_3_points_goal_attempted = models.FloatField(db_column='3_points_goal_attempted', blank=True, null=True)  # Field renamed because it wasn't a valid Python identifier.
    number_3_points_goal_percentage = models.FloatField(db_column='3_points_goal_Percentage', blank=True, null=True)  # Field name made lowercase. Field renamed because it wasn't a valid Python identifier.
    free_throws_made = models.FloatField(blank=True, null=True)
    free_throws_attempted = models.FloatField(blank=True, null=True)
    free_throw_percentage = models.FloatField(blank=True, null=True)
    offensive_rebounds = models.FloatField(blank=True, null=True)
    defensive_rebounds = models.FloatField(blank=True, null=True)
    total_rebounds = models.FloatField(blank=True, null=True)
    assists = models.FloatField(blank=True, null=True)
    turnovers = models.FloatField(blank=True, null=True)
    steels = models.FloatField(blank=True, null=True)
    blocks = models.FloatField(blank=True, null=True)
    personal_fouls = models.FloatField(blank=True, null=True)
    fantacy_points = models.FloatField(blank=True, null=True)
    doubles_doubles = models.FloatField(blank=True, null=True)
    triple_doubles = models.FloatField(blank=True, null=True)
   
    class Meta:
        managed = False
        db_table = 'Player_statistic'
        # primary_key = MultiFieldPrimaryKey(fields=['player_id', 'team_id','game_id'])
        unique_together = (("player_id", "game_id","team_id"),)
        # constraints = [
        #     models.UniqueConstraint(fields=['player_id', 'game_id', 'team_id'], name='id')
        # ]

class ViewPlayerList(models.Model):
    player_id = models.IntegerField(primary_key=True)
    name = models.TextField(blank=True, null=True)
    age = models.IntegerField(blank=True, null=True)
    jersey_number = models.IntegerField()
    team_name= models.TextField()
    guard_position= models.TextField()
    height=models.TextField()
    weight=models.TextField()
    last_attended=models.TextField()
    country=models.TextField()
    salary=models.TextField()
    introduce=models.TextField()
    mvp_times=models.IntegerField()

    class Meta:
        managed = False
        db_table = 'view_player_list'
class ViewPlayerSalaryList(models.Model):
    player_id = models.IntegerField(primary_key=True)
    name = models.TextField(blank=True, null=True)
    age = models.IntegerField(blank=True, null=True)
    jersey_number = models.IntegerField()
    team_name= models.TextField()
    guard_position= models.TextField()
    country=models.TextField()
    salary=models.TextField()
    salary_rank=models.IntegerField()
    salary_per_rank=models.IntegerField()

    class Meta:
        managed = False
        db_table = 'view_player_salary_list'
class ViewMvpPlayerList(models.Model):
    name = models.TextField(primary_key=True)
    mvp_get_count = models.IntegerField(blank=True, null=True)
    jersey_number = models.IntegerField()
    age= models.TextField()
    guard_position= models.TextField()
    country=models.TextField()
    salary=models.TextField()
    class Meta:
        managed = False
        db_table = 'view_mvp_player_list'

class ProducePlayerDetail(models.Model):
    name=models.TextField()
    game_season=models.TextField()
    team_name=models.TextField()
    player_id =models.IntegerField(primary_key=True)
    game_id = models.IntegerField(blank=True, null=True)
    team_id = models.IntegerField(blank=True, null=True)
    game_played_count = models.IntegerField(blank=True, null=True)
    min_played = models.FloatField(blank=True, null=True)
    points = models.FloatField(blank=True, null=True)
    field_goals_made = models.FloatField(blank=True, null=True)
    field_goals_attempted = models.FloatField(blank=True, null=True)
    field_goals_percentage = models.FloatField(blank=True, null=True)
    number_3_points_goal_made = models.FloatField(db_column='3_points_goal_made', blank=True, null=True)  # Field renamed because it wasn't a valid Python identifier.
    number_3_points_goal_attempted = models.FloatField(db_column='3_points_goal_attempted', blank=True, null=True)  # Field renamed because it wasn't a valid Python identifier.
    number_3_points_goal_percentage = models.FloatField(db_column='3_points_goal_Percentage', blank=True, null=True)  # Field name made lowercase. Field renamed because it wasn't a valid Python identifier.
    free_throws_made = models.FloatField(blank=True, null=True)
    free_throws_attempted = models.FloatField(blank=True, null=True)
    free_throw_percentage = models.FloatField(blank=True, null=True)
    offensive_rebounds = models.FloatField(blank=True, null=True)
    defensive_rebounds = models.FloatField(blank=True, null=True)
    total_rebounds = models.FloatField(blank=True, null=True)
    assists = models.FloatField(blank=True, null=True)
    turnovers = models.FloatField(blank=True, null=True)
    steels = models.FloatField(blank=True, null=True)
    blocks = models.FloatField(blank=True, null=True)
    personal_fouls = models.FloatField(blank=True, null=True)
    fantacy_points = models.FloatField(blank=True, null=True)
    doubles_doubles = models.FloatField(blank=True, null=True)
    triple_doubles = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'get_player_detail_info'