# restfulapi/serializers.py
from rest_framework import serializers
from .models import Music,ViewCoachList,Team,ViewTeamList,Coach,Stadium,ViewGameList,Game,Season,ViewSeasonMvpList,ViewPlayerList,Player,ViewPlayerSalaryList,PlayerStatistic,ViewMvpPlayerList,ProducePlayerDetail

# 序列化模型为其他格式
class StadiumSerializer(serializers.ModelSerializer):
    class Meta:
            model = Stadium

            # 序列化所有的字段
            fields = '__all__'

            # 序列化部分字段
            # fields = ('id','song','singer','last_modify_date','created')
class CoachSerializer(serializers.ModelSerializer):
    class Meta:
            model = Coach

            # 序列化所有的字段
            fields = '__all__'

            # 序列化部分字段
            # fields = ('id','song','singer','last_modify_date','created')
class viewTeamListSerializer(serializers.ModelSerializer):
    class Meta:
            model = ViewTeamList

            # 序列化所有的字段
            fields = '__all__'

            # 序列化部分字段
            # fields = ('id','song','singer','last_modify_date','created')
class TeamSerializer(serializers.ModelSerializer):
    class Meta:
            model = Team

            # 序列化所有的字段
            fields = '__all__'

            # 序列化部分字段
            # fields = ('id','song','singer','last_modify_date','created')
class MusicSerializer(serializers.ModelSerializer):

    class Meta:
        model = Music

        # 序列化所有的字段
        fields = '__all__'

        # 序列化部分字段
        # fields = ('id','song','singer','last_modify_date','created')
class ViewCoachListSerializer(serializers.ModelSerializer):

    class Meta:
        model = ViewCoachList

        # 序列化所有的字段
        fields = '__all__'

        # 序列化部分字段
        # fields = ()
class ViewGameListSerializer(serializers.ModelSerializer):

    class Meta:
        model = ViewGameList

        # 序列化所有的字段
        fields = '__all__'

        # 序列化部分字段
        # fields = ()
class GameSerializer(serializers.ModelSerializer):

    class Meta:
        model = Game

        # 序列化所有的字段
        fields = '__all__'

        # 序列化部分字段
        # fields = ()
class SeasonSerializer(serializers.ModelSerializer):

    class Meta:
        model = Season

        # 序列化所有的字段
        fields = '__all__'

        # 序列化部分字段
        # fields = ()
class ViewSeasonMvpListSerializer(serializers.ModelSerializer):

    class Meta:
        model = ViewSeasonMvpList

        # 序列化所有的字段
        fields = '__all__'

        # 序列化部分字段
        # fields = ()
class ViewPlayerListSerializer(serializers.ModelSerializer):

    class Meta:
        model = ViewPlayerList

        # 序列化所有的字段
        fields = '__all__'

        # 序列化部分字段
        # fields = ()
class PlayerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Player

        # 序列化所有的字段
        fields = '__all__'

        # 序列化部分字段
        # fields = ()

class ViewPlayerSalaryListSerializer(serializers.ModelSerializer):

    class Meta:
        model = ViewPlayerSalaryList

        # 序列化所有的字段
        fields = '__all__'

        # 序列化部分字段
        # fields = ()
class ViewMvpPlayerListSerializer(serializers.ModelSerializer):

    class Meta:
        model = ViewMvpPlayerList

        # 序列化所有的字段
        fields = '__all__'

        # 序列化部分字段
        # fields = ()
class PlayerStatisticSerializer(serializers.ModelSerializer):

    class Meta:
        model = PlayerStatistic

        # 序列化所有的字段
        fields = '__all__'

        # 序列化部分字段
        # fields = ()
class ProducePlayerDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProducePlayerDetail

        # 序列化所有的字段
        fields = '__all__'

        # 序列化部分字段
        # fields = ()

        