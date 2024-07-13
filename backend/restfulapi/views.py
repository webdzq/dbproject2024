from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status

from restfulapi.models import Team,Season,ViewSeasonMvpList,Player,ViewPlayerList,ProducePlayerDetail,PlayerStatistic
from restfulapi.models import ViewCoachList, ViewTeamList, Coach, Stadium, ViewGameList, Game,ViewPlayerSalaryList,ViewMvpPlayerList
from restfulapi.serializers import  ViewCoachListSerializer, TeamSerializer, viewTeamListSerializer, CoachSerializer, StadiumSerializer, ViewCoachListSerializer, ViewGameListSerializer, GameSerializer,SeasonSerializer,ViewSeasonMvpListSerializer,PlayerSerializer,ViewPlayerListSerializer
from restfulapi.serializers import ProducePlayerDetailSerializer,PlayerStatisticSerializer,ViewPlayerSalaryListSerializer,ViewMvpPlayerListSerializer
from rest_framework.decorators import api_view
from django.db import connection

# formart output data
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi

'''
接口包装
'''
def formart_api_data(data=[], code=0, msg='success'):
    data = formart_page_api_data(data)
    return {
        'errNo': code,
        'data': data,
        'message': msg
    }

'''
接口包装
'''
def formart_page_api_data(data=[]):
    return {
        'items': data,
        'meta': {
            'total': len(data),
            'currentPage': 1
        }

    }


@api_view(['GET'])
@swagger_auto_schema(
        operation_description="https://www.553668.com/manong/347705.html",
        request_body=openapi.Schema(
            method='GET',
            type=openapi.TYPE_OBJECT,
            required=['page', 'pageSize'],
            manual_parameters={1:1},
            properties={
                'page': openapi.Schema(type=openapi.TYPE_NUMBER),
                'pageSize': openapi.Schema(type=openapi.TYPE_NUMBER),
            },
        ), operation_summary='list')
def get_coach_kv(request):
    """ 
    get coach list key:value111
    """
    try:
        coach_data = Coach.objects.all()
        rep_data = CoachSerializer(coach_data, many=True)
        apidata = formart_api_data(rep_data.data)
        return JsonResponse(apidata, safe=False)
    except Coach.DoesNotExist:
        apidata = formart_api_data({}, 100, 'The tutorial does not exist')
        return JsonResponse(apidata, safe=False)
@api_view(['GET'])
def get_player_kv(request):
    try:
        player_data = Player.objects.all()
        rep_data = PlayerSerializer(player_data, many=True)
        apidata = formart_api_data(rep_data.data)
        return JsonResponse(apidata, safe=False)
    except Player.DoesNotExist:
        apidata = formart_api_data({}, 100, 'The tutorial does not exist')
        return JsonResponse(apidata, safe=False)


@api_view(['GET'])
def get_stadium_list(request):
    try:
        stad_data = Stadium.objects.all()
        rep_data = StadiumSerializer(stad_data, many=True)
        apidata = formart_api_data(rep_data.data)
        return JsonResponse(apidata, safe=False)
    except Coach.DoesNotExist:
        apidata = formart_api_data({}, 100, 'The tutorial does not exist')
        return JsonResponse(apidata, safe=False)


@api_view(['GET', 'POST', 'DELETE'])
def team_get_list(request):
    if request.method == 'GET':
        try:
            team_id = request.query_params.get('team_id', None)
            team_name = request.query_params.get('team_name', None)
            city = request.query_params.get('city', None)
            coach_name = request.query_params.get('coach_name', None)
            stadium_name = request.query_params.get('stadium_name', None)

            tutorial = ViewTeamList.objects.all()
            if team_name is not None:
                tutorial = tutorial.filter(team_name__icontains=team_name)
            if city is not None:
                tutorial = tutorial.filter(city__icontains=city)
            if coach_name is not None:
                tutorial = tutorial.filter(coach_name__icontains=coach_name)
            if stadium_name is not None:
                tutorial = tutorial.filter(
                    stadium_name__icontains=stadium_name)
            if team_id is not None:
                tutorial = tutorial.filter(team_id__icontains=team_id)
        except ViewTeamList.DoesNotExist:
            apidata = formart_api_data({}, 100, 'The tutorial does not exist')
            return JsonResponse(apidata, safe=False)
        tutorial_serializer = viewTeamListSerializer(tutorial, many=True)
        print('tutorial_serializer=', tutorial_serializer.data)
        apidata = formart_api_data(tutorial_serializer.data)
        return JsonResponse(apidata, safe=False)
    elif request.method == 'POST':

        form_data = JSONParser().parse(request)
        team_id = form_data.get('team_id')
        type = form_data.get('type')
        print('team_id',team_id)
        if type is not None:
            # print('team_id',team_id)
            del_data = Team.objects.get(team_id=team_id)
            del_data.delete()
            msg = str(team_id)+' was deleted successfully'
            apidata = formart_api_data({},0,msg)
            # print('del_data',del_data)
            return JsonResponse(apidata, status=status.HTTP_201_CREATED)
        if team_id == '' or team_id is  None:

            id_max_value = Team.objects.values('team_id').last().get('team_id')
            print('id_max_value=', id_max_value)
            form_data['team_id'] = id_max_value + 1
            serializer = TeamSerializer(data=form_data)
            # print('serializer==',serializer)
            if serializer.is_valid():
                serializer.save()
                apidata = formart_api_data(serializer.data)
                return JsonResponse(apidata, status=status.HTTP_201_CREATED)
        else:
            # print('form_data',form_data)
            tutorial = Team.objects.filter(team_id=team_id)
            tutorial.update(**form_data)
            apidata = formart_api_data(form_data)
            return JsonResponse(apidata, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
def coach_get_list(request):
    if request.method == 'GET':
        try:
            coach_id = request.query_params.get('coach_id', None)
            coach_name = request.query_params.get('coach_name', None)
            # team_name = request.query_params.get('team_name', None)
            nationality = request.query_params.get('nationality', None)
            num_champion = request.query_params.get('num_champion', None)
            tutorial = Coach.objects.all()
            # if team_name is not None:
            #     tutorial = tutorial.filter(team_name__icontains=team_name)
            if coach_name is not None:
                tutorial = tutorial.filter(coach_name__icontains=coach_name)
            if nationality is not None:
                tutorial = tutorial.filter(nationality__icontains=nationality)
            if num_champion is not None:
                tutorial = tutorial.filter(
                    num_champion__icontains=num_champion)
            if coach_id is not None:
                tutorial = tutorial.filter(coach_id__icontains=coach_id)
        except Coach.DoesNotExist:
            apidata = formart_api_data({}, 100, 'The tutorial does not exist')
            return JsonResponse(apidata, safe=False)
        tutorial_serializer = CoachSerializer(tutorial, many=True)
        # print('tutorial_serializer=',tutorial_serializer.data)
        apidata = formart_api_data(tutorial_serializer.data)
        return JsonResponse(apidata, safe=False)
    elif request.method == 'POST':
        form_data = JSONParser().parse(request)
        coach_id = form_data.get('coach_id')
        type = form_data.get('type')
        if type is not None:
            # del
            # print('team_id',team_id)
            try:
                del_data = Coach.objects.get(coach_id=coach_id)
                del_data.delete()
                # apidata = formart_api_data({})
                msg = str(coach_id)+' was deleted successfully'
                apidata = formart_api_data({},0,msg)
                # print('del_data',del_data)
                return JsonResponse(apidata, status=status.HTTP_201_CREATED)
            except BaseException as e:
                msg = str(coach_id)+' was deleted error:'+str(e)
                apidata = formart_api_data({},0,msg)
                # print('del_data',del_data)
                return JsonResponse(apidata, status=status.HTTP_201_CREATED)
        if coach_id is None:
            # add
            id_max_value = Coach.objects.values(
                'coach_id').last().get('coach_id')
            print('id_max_value=', id_max_value)
            form_data['coach_id'] = id_max_value + 1
            serializer = CoachSerializer(data=form_data)
            # print('serializer==', serializer)
            if serializer.is_valid():
                serializer.save()
                apidata = formart_api_data(serializer.data)
                return JsonResponse(apidata, status=status.HTTP_201_CREATED)
        else:
            # print('form_data',form_data)
            # update
            tutorial = Coach.objects.filter(coach_id=coach_id)
            print('tutorial',tutorial)
            if len(tutorial)>0:
                tutorial.update(**form_data)
                apidata = formart_api_data(form_data)
                return JsonResponse(apidata, status=status.HTTP_201_CREATED)
            else:
                msg = str(coach_id)+' was not exist:'
                apidata = formart_api_data({},0,msg)
                return JsonResponse(apidata, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
def game_get_list(request):
    if request.method == 'GET':
        try:
            # list

            game_id = request.query_params.get('game_id', None)
            game_season = request.query_params.get('game_season', None)
            home_team = request.query_params.get('home_team', None)
            away_team = request.query_params.get('away_team', None)
            stadium_name = request.query_params.get('stadium_name', None)
            game_date = request.query_params.get('game_date', None)
            tutorial = ViewGameList.objects.all()
            # if team_name is not None:
            #     tutorial = tutorial.filter(team_name__icontains=team_name)
            if game_season is not None:
                tutorial = tutorial.filter(game_season__icontains=game_season)
            if home_team is not None:
                tutorial = tutorial.filter(home_team__icontains=home_team)
            if away_team is not None:
                tutorial = tutorial.filter(away_team__icontains=away_team)
            if game_date is not None:
                tutorial = tutorial.filter(game_date__icontains=game_date)
            if stadium_name is not None:
                tutorial = tutorial.filter(
                    stadium_name__icontains=stadium_name)
            if game_id is not None:
                tutorial = tutorial.filter(game_id__icontains=game_id)
        except ViewGameList.DoesNotExist:
            apidata = formart_api_data({}, 100, 'The tutorial does not exist')
            return JsonResponse(apidata, safe=False)
        tutorial_serializer = ViewGameListSerializer(tutorial, many=True)
        # print('tutorial_serializer=',tutorial_serializer.data)
        apidata = formart_api_data(tutorial_serializer.data)
        return JsonResponse(apidata, safe=False)
    elif request.method == 'POST':
        form_data = JSONParser().parse(request)
        game_id = form_data.get('game_id')
        type = form_data.get('type')
        if type is not None:
            # print('team_id',team_id)
            try:
                del_data = Game.objects.get(game_id=game_id)
                del_data.delete()
                apidata = formart_api_data({})
                # print('del_data',del_data)
                return JsonResponse(apidata, status=status.HTTP_201_CREATED)
            except BaseException as e:
                msg = str(game_id)+','+str(e)
                apidata = formart_api_data({},0,msg)
                return JsonResponse(apidata, status=status.HTTP_201_CREATED)
            
        if game_id is None:
            # add
            id_max_value = Game.objects.values(
                'game_id').last().get('game_id')
            print('id_max_value=', id_max_value)
            form_data['game_id'] = id_max_value + 1
            serializer = GameSerializer(data=form_data)
            print('serializer==', serializer,serializer.is_valid(),serializer.errors)
            try:
                if serializer.is_valid():
                    # print('serializer==', serializer.errors)
                    serializer.save()
                    apidata = formart_api_data(serializer.data)
                    return JsonResponse(apidata, status=status.HTTP_201_CREATED)
            except BaseException as e:
                print('e',e)
            apidata = formart_api_data({},100,str(serializer.errors))
            return JsonResponse(apidata, status=status.HTTP_400_BAD_REQUEST)
        else:
            # update
            tutorial = Game.objects.filter(game_id=game_id)
            tutorial.update(**form_data)
            apidata = formart_api_data(form_data)
            return JsonResponse(apidata, status=status.HTTP_201_CREATED)
        # return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def stadium_get_list(request):
    tutorial = Stadium.objects.all()
    if request.method == 'GET':
        try:
            # list
            stadium_id = request.query_params.get('stadium_id', None)
            stadium_name = request.query_params.get('stadium_name', None)
            location = request.query_params.get('location', None)
            if location is not None:
                tutorial = tutorial.filter(location__icontains=location)
            if stadium_name is not None:
                tutorial = tutorial.filter(
                    stadium_name__icontains=stadium_name)
            if stadium_id is not None:
                tutorial = tutorial.filter(stadium_id__icontains=stadium_id)
        except Stadium.DoesNotExist:
            apidata = formart_api_data({}, 100, 'The tutorial does not exist')
            return JsonResponse(apidata, safe=False)
        tutorial_serializer = StadiumSerializer(tutorial, many=True)
        # print('tutorial_serializer=',tutorial_serializer.data)
        apidata = formart_api_data(tutorial_serializer.data)
        return JsonResponse(apidata, safe=False)
    elif request.method == 'POST':
        form_data = JSONParser().parse(request)
        stadium_id = form_data.get('stadium_id')
        type = form_data.get('type')
        if type is not None:
            try:
                # del
                # print('team_id',team_id)
                del_data = Stadium.objects.get(stadium_id=stadium_id)
                del_data.delete()
                msg = str(stadium_id)+' was deleted successfully'
                apidata = formart_api_data({},0,msg)
                # print('del_data',del_data)
                return JsonResponse(apidata, status=status.HTTP_201_CREATED)
            except BaseException as e:
                    msg = str(stadium_id)+' was deleted error:'+str(e)
                    apidata = formart_api_data({},0,msg)
                    # print('del_data',del_data)
                    return JsonResponse(apidata, status=status.HTTP_201_CREATED)
        if stadium_id is None:
            # add
            id_max_value = Stadium.objects.values(
                'stadium_id').last().get('stadium_id')
            print('id_max_value=', id_max_value)
            form_data['stadium_id'] = id_max_value + 1
            serializer = StadiumSerializer(data=form_data)
            print('serializer==', serializer,serializer.is_valid(),serializer.errors)
            try:
                if serializer.is_valid():
                    # print('serializer==', serializer.errors)
                    serializer.save()              
                    apidata = formart_api_data(serializer.data)
                    return JsonResponse(apidata, status=status.HTTP_201_CREATED)
            except BaseException as e:
                print('e',e)
                apidata = formart_api_data({},100,str(serializer.errors))
                return JsonResponse(apidata, status=status.HTTP_400_BAD_REQUEST)
        else:
            # update
            tutorial = Stadium.objects.filter(stadium_id=stadium_id)
            tutorial.update(**form_data)
            apidata = formart_api_data(form_data)
            return JsonResponse(apidata, status=status.HTTP_201_CREATED)


@api_view(['GET', 'POST'])
def season_get_list(request):
    if request.method == 'GET':
        try:
            # list
            season_id = request.query_params.get('season_id', None)
            season_year = request.query_params.get('season_year', None)
            mvp = request.query_params.get('mvp', None)
            champion_team = request.query_params.get('champion_team', None)
            tutorial = ViewSeasonMvpList.objects.all()
            if mvp is not None:
                tutorial = tutorial.filter(mvp__icontains=mvp)
            if champion_team is not None:
                tutorial = tutorial.filter(
                    champion_team__icontains=champion_team)
            if season_id is not None:
                tutorial = tutorial.filter(season_id__icontains=season_id)
            if season_year is not None:
                tutorial = tutorial.filter(season_year__icontains=season_year)
        except ViewSeasonMvpList.DoesNotExist:
            apidata = formart_api_data({}, 100, 'The tutorial does not exist')
            return JsonResponse(apidata, safe=False)
        tutorial_serializer = ViewSeasonMvpListSerializer(tutorial, many=True)
        # print('tutorial_serializer=',tutorial_serializer.data)
        apidata = formart_api_data(tutorial_serializer.data)
        return JsonResponse(apidata, safe=False)
    elif request.method == 'POST':
        form_data = JSONParser().parse(request)
        season_id = form_data.get('season_id')
        type = form_data.get('type')
        if type is not None:
            # print('team_id',team_id)
            try:
                del_data = Season.objects.get(season_id=season_id)
                del_data.delete()
                apidata = formart_api_data({})
                # print('del_data',del_data)
                return JsonResponse(apidata, status=status.HTTP_201_CREATED)
            except BaseException as e:
                msg = str(season_id)+' was not exist:'
                apidata = formart_api_data({},0,msg)
                return JsonResponse(apidata, status=status.HTTP_201_CREATED)
                
        if season_id is None:
            # add
            id_max_value = Season.objects.values(
                'season_id').last().get('season_id')
            print('id_max_value=', id_max_value)
            form_data['season_id'] = id_max_value + 1
            serializer = SeasonSerializer(data=form_data)
            print('serializer==',serializer.is_valid(),serializer.errors)
            try:
                if serializer.is_valid():
                    # print('serializer==', serializer.errors)
                    serializer.save()
                    apidata = formart_api_data(serializer.data)
                    return JsonResponse(apidata, status=status.HTTP_201_CREATED)
            except BaseException as e:
                print('e',e)
            apidata = formart_api_data({},100,str(serializer.errors))
            return JsonResponse(apidata, status=status.HTTP_400_BAD_REQUEST)
        else:
            # update
            tutorial = Season.objects.filter(season_id=season_id)
            tutorial.update(**form_data)
            apidata = formart_api_data(form_data)
            return JsonResponse(apidata, status=status.HTTP_201_CREATED)

@api_view(['GET', 'POST'])
def player_get_list(request):
    if request.method == 'GET':
        try:
            # list
            player_id = request.query_params.get('player_id', None)
            name = request.query_params.get('name', None)
            team_name = request.query_params.get('team_name', None)
            country = request.query_params.get('country', None)
            salary = request.query_params.get('salary', None)
            age = request.query_params.get('age', None)
            tutorial = ViewPlayerList.objects.all()
            if name is not None:
                tutorial = tutorial.filter(name__icontains=name)
            if salary is not None:
                tutorial = tutorial.filter(salary__icontains=salary)
            if age is not None:
                tutorial = tutorial.filter(age__icontains=age)
            if team_name is not None:
                tutorial = tutorial.filter(
                    team_name__icontains=team_name)
            if player_id is not None:
                tutorial = tutorial.filter(player_id__icontains=player_id)
            if country is not None:
                tutorial = tutorial.filter(country__icontains=country)
        except ViewPlayerList.DoesNotExist:
            apidata = formart_api_data({}, 100, 'The tutorial does not exist')
            return JsonResponse(apidata, safe=False)
        # print('tutorial',tutorial)
        tutorial_serializer = ViewPlayerListSerializer(tutorial, many=True)
        # print('tutorial_serializer=',tutorial_serializer.data)
        apidata = formart_api_data(tutorial_serializer.data)
        return JsonResponse(apidata, safe=False)
    elif request.method == 'POST':
        form_data = JSONParser().parse(request)
        player_id = form_data.get('player_id')
        type = form_data.get('type')
        if type is not None:
            # print('team_id',team_id)
            del_data = Player.objects.get(player_id=player_id)
            del_data.delete()
            msg = str(player_id)+' was deleted successfully'
            apidata = formart_api_data({},0,msg)
            # print('del_data',del_data)
            return JsonResponse(apidata, status=status.HTTP_201_CREATED)
        if player_id is None:
            # add
            id_max_value = Player.objects.values(
                'player_id').last().get('player_id')
            # print('id_max_value=', id_max_value)
            form_data['player_id'] = id_max_value + 1
            serializer = PlayerSerializer(data=form_data)
            # print('serializer==', serializer,serializer.is_valid(),serializer.errors)
            try:
                if serializer.is_valid():
                    # print('serializer==', serializer.errors)
                    serializer.save()
                    apidata = formart_api_data(serializer.data)
                    return JsonResponse(apidata, status=status.HTTP_201_CREATED)
            except BaseException as e:
                print('e',e)
            apidata = formart_api_data({},100,str(serializer.errors))
            return JsonResponse(apidata, status=status.HTTP_400_BAD_REQUEST)
        else:
            # update
            tutorial = Player.objects.filter(player_id=player_id)
            tutorial.update(**form_data)
            apidata = formart_api_data(form_data)
            return JsonResponse(apidata, status=status.HTTP_201_CREATED)
 
@api_view(['GET', 'POST'])   
def get_player_detail(request):
    # 存储过程调用
    player_id = request.query_params.get('player_id', None)
    game_id = request.query_params.get('game_id', None)
    team_id = request.query_params.get('team_id', None)
    name = request.query_params.get('name', None)
    team_name = request.query_params.get('team_name', None)
    tutorial=ProducePlayerDetail.objects.raw("call get_player_detail_info(%s,%s,%s)",[player_id,game_id,team_id])
    # print('tutorial',tutorial)
    list =[]
    if name is not None:
        for item in tutorial:
            # print('item',item.name,name,item.name.find(name))
            if(name.lower() in item.name.lower()):
                list.append(item)
        # print('tutorial',tutorial11)
    if team_name is not None:
       for item in tutorial:
           if(team_name.lower() in item.team_name.lower()):
                print('item',item)
                list.append(item)
    if len(list)==0:
        list=tutorial
    # print('list',list)
    tutorial_serializer = ProducePlayerDetailSerializer(list, many=True)
    # print('tutorial_serializer=',tutorial_serializer.data)
    apidata = formart_api_data(tutorial_serializer.data)
    # apidata = formart_api_data(resp)
    return JsonResponse(apidata, safe=False)
@api_view(['POST']) 
def get_playerDetail_list(request):
    player_id = request.query_params.get('player_id', None)
    game_id = request.query_params.get('game_id', None)
    team_id = request.query_params.get('team_id', None)
    # name = request.query_params.get('name', None)
    # team_name = request.query_params.get('team_name', None)
    if request.method == 'POST':
        form_data = JSONParser().parse(request)
        player_id = form_data.get('player_id')
        game_id = form_data.get('game_id')
        team_id = form_data.get('team_id')
        type = form_data.get('type')
        update = form_data.get('update')
        if type is not None:
            # print('team_id',player_id,team_id,game_id)
            # del_data = PlayerStatistic.objects.filter(player_id=player_id)
            # del_data=PlayerStatistic.objects.raw("DELETE FROM  Player_statistic  WHERE player_id =%s AND game_id =%s AND team_id =%s",[player_id,game_id,team_id])
            #del_data = PlayerStatistic.objects.get(player_id=player_id,team_id=team_id,game_id=game_id)
            # CALL proc_del_player_detail(200001,400002,300001);
            # del_data=PlayerStatistic.objects.raw("call proc_del_player_detail(%s,%s,%s)",[player_id,game_id,team_id])
            # up 都没有用，down方式可以删除
            with connection.cursor() as cursor:
                try:
                    cursor.execute("call proc_del_player_detail(%s,%s,%s)",[player_id,game_id,team_id])
                    connection.commit()
                    # resp = cursor.fetchall()
                    # print('del_data',resp)
                    # apidata = formart_api_data({})
                    msg = str(player_id)+','+str(game_id)+','+str(team_id)+' was deleted successfully'
                    apidata = formart_api_data({
                        "player_id":player_id,
                        "game_id":game_id,
                        "team_id":team_id
                        },0,msg)
                    cursor.close()
                    # print('del_data',del_data)
                    return JsonResponse(apidata, status=status.HTTP_201_CREATED)
                except BaseException as e:
                    apidata = formart_api_data({},100,str(e))
                    # print('del_data',del_data)
                    return JsonResponse(apidata, status=status.HTTP_400_BAD_REQUEST)
           
        if update is None:
            # add
            # id_max_value = PlayerStatistic.objects.values(
            #     'player_id').last().get('player_id')
            # print('id_max_value=', id_max_value)
            # form_data['player_id'] = id_max_value + 1
            serializer = PlayerStatisticSerializer(data=form_data)
            print('serializer==', serializer,serializer.is_valid(),serializer.errors)
            try:
                if serializer.is_valid():
                    # print('serializer==', serializer.errors)
                    serializer.save()
                    apidata = formart_api_data(serializer.data)
                    return JsonResponse(apidata, status=status.HTTP_201_CREATED)
                else:
                    apidata = formart_api_data({},100,str(serializer.errors))
                    return JsonResponse(apidata, status=status.HTTP_400_BAD_REQUEST)  
            except BaseException as e:
                # print('e',e)
                apidata = formart_api_data({},100,str(e))
                return JsonResponse(apidata, status=status.HTTP_400_BAD_REQUEST)
        else:
            # update
            print('update',update)
            tutorial = PlayerStatistic.objects.filter(player_id=player_id,team_id=team_id,game_id=game_id)
            del form_data['update']
            tutorial.update(**form_data)
            apidata = formart_api_data(form_data)
            return JsonResponse(apidata, status=status.HTTP_201_CREATED)
@api_view(['GET', 'POST']) 
def get_player_salary_list(request):
    try:
        # list
        player_id = request.query_params.get('player_id', None)
        name = request.query_params.get('name', None)
        team_name = request.query_params.get('team_name', None)
        country = request.query_params.get('country', None)
        salary = request.query_params.get('salary', None)
        tutorial = ViewPlayerSalaryList.objects.all()
        if name is not None:
            tutorial = tutorial.filter(name__icontains=name)
        if salary is not None:
            tutorial = tutorial.filter(salary__icontains=salary)
        if team_name is not None:
            tutorial = tutorial.filter(
                team_name__icontains=team_name)
        if player_id is not None:
            tutorial = tutorial.filter(player_id__icontains=player_id)
        if country is not None:
            tutorial = tutorial.filter(country__icontains=country)
    except ViewPlayerSalaryList.DoesNotExist:
        apidata = formart_api_data({}, 100, 'The tutorial does not exist')
        return JsonResponse(apidata, safe=False)
    # print('tutorial',tutorial)
    tutorial_serializer = ViewPlayerSalaryListSerializer(tutorial, many=True)
    # print('tutorial_serializer=',tutorial_serializer.data)
    apidata = formart_api_data(tutorial_serializer.data)
    return JsonResponse(apidata, safe=False)
@api_view(['GET', 'POST']) 
def get_player_mvp_list(request):
    try:
        # list
        player_id = request.query_params.get('player_id', None)
        name = request.query_params.get('name', None)
        age = request.query_params.get('age', None)
        country = request.query_params.get('country', None)
        salary = request.query_params.get('salary', None)
        tutorial = ViewMvpPlayerList.objects.all()
        if name is not None:
            tutorial = tutorial.filter(name__icontains=name)
        if salary is not None:
            tutorial = tutorial.filter(salary__icontains=salary)
        if age is not None:
            tutorial = tutorial.filter(
                age__icontains=age)
        if player_id is not None:
            tutorial = tutorial.filter(player_id__icontains=player_id)
        if country is not None:
            tutorial = tutorial.filter(country__icontains=country)
    except ViewMvpPlayerList.DoesNotExist:
        apidata = formart_api_data({}, 100, 'The tutorial does not exist')
        return JsonResponse(apidata, safe=False)
    # print('tutorial',tutorial)
    tutorial_serializer = ViewMvpPlayerListSerializer(tutorial, many=True)
    # print('tutorial_serializer=',tutorial_serializer.data)
    apidata = formart_api_data(tutorial_serializer.data)
    return JsonResponse(apidata, safe=False)


