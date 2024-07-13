<script setup lang="ts">
import { ContentDetailWrap } from '@/components/ContentDetailWrap'
import { useEmitt } from '@/hooks/event/useEmitt'
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'
import type { RuleDetailForm } from '@/api/PlayerGroup/types'
import {
  addPlayerDetailApi,
  getPlayerListApi,
  updatePlayerApi,
  getPlayerDetailList,
  getPlayerkv,
  updatePlayerDetailApi
} from '@/api/PlayerGroup/index'
import { getTeamListApi } from '@/api/TeamGroup/index'
import { getGameListApi } from '@/api/GameGroup/index'
import { ElForm, ElFormItem, ElButton, ElInput, ElMessage, ElSelect, ElOption } from 'element-plus'
import { object } from 'vue-types'
const { push, go } = useRouter()
const { emitter } = useEmitt()
const rules = reactive<FormRules<RuleDetailForm>>({
  game_id: [{ required: true, message: 'player name is required', trigger: 'blur' }],
  team_id: [{ required: true, message: 'team name is required', trigger: 'blur' }],
  points: [{ required: true, message: 'country are required', trigger: 'blur' }],
  game_played_count: [{ required: true, message: 'age are required', trigger: 'blur' }],
  field_goals_made: [{ required: true, message: 'age are required', trigger: 'blur' }]
})

const ruleFormRef = ref<FormInstance>()
const TeamOptions = ref<any[]>([])
const GameOptions = ref<any[]>([])
const PlayerOptions = ref<any[]>([])
const { query } = useRoute()
const loading = ref(false)

const editInitLoading = ref(false)

const ruleForm = reactive<any>({
  // player_id: '',
  game_id: '',
  team_id: '',
  game_played_count: '',
  min_played: '',
  points: '',
  field_goals_made: '',
  field_goals_attempted: '',
  field_goals_percentage: '',
  number_3_points_goal_made: '',
  number_3_points_goal_attempted: '',
  number_3_points_goal_percentage: '',
  free_throws_made: '',
  free_throws_attempted: '',
  free_throw_percentage: '',
  offensive_rebounds: '',
  defensive_rebounds: '',
  assists: '',
  turnovers: '',
  steels: '',
  blocks: '',
  personal_fouls: '',
  fantacy_points: '',
  doubles_doubles: '',
  triple_doubles: ''
})
const getTableDet = async () => {
  editInitLoading.value = true
  const res_data = await getPlayerDetailList({ player_id: query.id })
  console.log('res_data', res_data)
  if (res_data) {
    let res = res_data?.items[0]
    Object.assign(ruleForm, res)
    editInitLoading.value = false
  }
  // console.log('ruleForm=', ruleForm)
}
if (query.id) {
  getTableDet()
}
// get team list
const teamList = async () => {
  const res = await getTeamListApi()
  TeamOptions.value = res?.items.map((item) => {
    let id = item.team_id
    let name = item.team_name
    return {
      id: id,
      name: name
    }
  })
  // console.log('stadiumOptions.value', StadiumOptions.value)
}
teamList()
// get team list
const playerList = async () => {
  const res = await getPlayerkv()
  PlayerOptions.value = res?.items.map((item) => {
    let id = item.player_id
    let name = item.name
    return {
      id: id,
      name: name
    }
  })
  // console.log('stadiumOptions.value', StadiumOptions.value)
}
playerList()
// get team list
const gameList = async () => {
  const res = await getGameListApi()
  GameOptions.value = res?.items.map((item) => {
    let id = item.game_id
    let name = item.game_date
    return {
      id: id,
      name: name
    }
  })
  // console.log('stadiumOptions.value', StadiumOptions.value)
}
gameList()
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      // console.log('submit!', ruleForm.pages, ruleForm.pages.split(','))
      // const pages = ruleForm.options.split(',').map((item) => item.trim())
      console.log('ruleForm=', ruleForm)
      loading.value = true
      // let mvpKv = MvpOptions.value.filter((item) => {
      //   // console.log('mvpKv', ruleForm.player_id, item.id)
      //   return ruleForm.player_id == item.id
      // })
      // // console.log('mvpKv', mvpKv)
      // ruleForm.mvp = mvpKv[0]?.name ?? ''
      // const params = {
      //   champion_teamid: ruleForm.champion_teamid,
      //   mvp: ruleForm.mvp,
      //   player_id: ruleForm.player_id,
      //   season_year: ruleForm.season_year
      // }

      const params = ruleForm
      delete params.name
      delete params.game_season
      delete params.team_name
      let res
      if (query.id) {
        const editParams = Object.assign(
          {
            player_id: ruleForm.player_id,
            update: 'edit'
          },
          params
        )
        res = await updatePlayerDetailApi(editParams)
          .catch(() => {})
          .finally(() => {
            loading.value = false
          })
      } else {
        res = await addPlayerDetailApi(params)
          .catch(() => {})
          .finally(() => {
            loading.value = false
          })
      }
      if (res) {
        ElMessage.success(query.id ? 'update success' : 'save success')
        // emitter.emit('getApkList', 'add')
        push('/player/detail')
      }
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<template>
  <ContentDetailWrap :title="query.id ? 'edit' : 'add'" @back="push('/player/detail')">
    <template #header>
      <ElButton @click="go(-1)">Go</ElButton>
    </template>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      size="default"
      status-icon
      v-loading="editInitLoading"
    >
      <el-form-item label="player name">
        <el-select v-model="ruleForm.player_id" class="width-190" placeholder="select team name">
          <el-option
            v-for="item in PlayerOptions"
            :key="item.id"
            :label="item.name"
            :value="item.id"
            :disabled="query.id ? true : false"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="team name">
        <el-select v-model="ruleForm.team_id" class="width-190" placeholder="select team name">
          <el-option
            v-for="item in TeamOptions"
            :key="item.id"
            :label="item.name"
            :value="item.id"
            :disabled="query.id ? true : false"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="game season">
        <el-select v-model="ruleForm.game_id" class="width-190" placeholder="select team name">
          <el-option
            v-for="item in GameOptions"
            :key="item.id"
            :label="item.name"
            :value="item.id"
            :disabled="query.id ? true : false"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="game_played_count" prop="game_played_count">
        <el-input
          v-model="ruleForm.game_played_count"
          class="width-190"
          placeholder="place input"
        />
      </el-form-item>
      <el-form-item label="min_played" prop="min_played">
        <el-input v-model="ruleForm.min_played" class="width-190" placeholder="place iput" />
      </el-form-item>

      <el-form-item label="points " prop="points">
        <el-input v-model="ruleForm.points" class="width-190" placeholder="place iput" />
      </el-form-item>
      <el-form-item label="field_goals_made" prop="field_goals_made">
        <el-input v-model="ruleForm.field_goals_made" class="width-190" placeholder="place iput" />
      </el-form-item>
      <el-form-item label="field_goals_attempted" prop="field_goals_attempted">
        <el-input
          v-model="ruleForm.field_goals_attempted"
          class="width-190"
          placeholder="place iput"
        />
      </el-form-item>
      <el-form-item label="field_goals_percentage" prop="field_goals_percentage">
        <el-input
          v-model="ruleForm.field_goals_percentage"
          class="width-190"
          placeholder="place iput"
        />
      </el-form-item>
      <el-form-item label="number_3_points_goal_made" prop="number_3_points_goal_made">
        <el-input
          v-model="ruleForm.number_3_points_goal_made"
          class="width-190"
          placeholder="place iput"
        />
      </el-form-item>
      <el-form-item label="number_3_points_goal_attempted" prop="number_3_points_goal_attempted">
        <el-input
          v-model="ruleForm.number_3_points_goal_attempted"
          class="width-190"
          placeholder="place iput"
        />
      </el-form-item>
      <el-form-item label="number_3_points_goal_percentage" prop="number_3_points_goal_percentage">
        <el-input
          v-model="ruleForm.number_3_points_goal_percentage"
          class="width-190"
          placeholder="place iput"
        />
      </el-form-item>
      <el-form-item label="free_throws_made" prop="free_throws_made">
        <el-input v-model="ruleForm.free_throws_made" class="width-190" placeholder="place iput" />
      </el-form-item>
      <el-form-item label="free_throws_attempted" prop="free_throws_attempted">
        <el-input
          v-model="ruleForm.free_throws_attempted"
          class="width-190"
          placeholder="place iput"
        />
      </el-form-item>
      <el-form-item label="free_throw_percentage" prop="free_throw_percentage">
        <el-input
          v-model="ruleForm.free_throw_percentage"
          class="width-190"
          placeholder="place iput"
        />
      </el-form-item>
      <el-form-item label="offensive_rebounds" prop="offensive_rebounds">
        <el-input
          v-model="ruleForm.offensive_rebounds"
          class="width-190"
          placeholder="place iput"
        />
      </el-form-item>
      <el-form-item label="defensive_rebounds" prop="defensive_rebounds">
        <el-input
          v-model="ruleForm.defensive_rebounds"
          class="width-190"
          placeholder="place iput"
        />
      </el-form-item>
      <el-form-item label="assists" prop="assists">
        <el-input v-model="ruleForm.assists" class="width-190" placeholder="place iput" />
      </el-form-item>
      <el-form-item label="turnovers" prop="turnovers">
        <el-input v-model="ruleForm.turnovers" class="width-190" placeholder="place iput" />
      </el-form-item>
      <el-form-item label="steels" prop="steels">
        <el-input v-model="ruleForm.steels" class="width-190" placeholder="place iput" />
      </el-form-item>
      <el-form-item label="blocks" prop="blocks">
        <el-input v-model="ruleForm.blocks" class="width-190" placeholder="place iput" />
      </el-form-item>
      <el-form-item label="personal_fouls" prop="personal_fouls">
        <el-input v-model="ruleForm.personal_fouls" class="width-190" placeholder="place iput" />
      </el-form-item>
      <el-form-item label="fantacy_points" prop="fantacy_points">
        <el-input v-model="ruleForm.fantacy_points" class="width-190" placeholder="place iput" />
      </el-form-item>
      <el-form-item label="doubles_doubles" prop="doubles_doubles">
        <el-input v-model="ruleForm.doubles_doubles" class="width-190" placeholder="place iput" />
      </el-form-item>
      <el-form-item label="triple_doubles" prop="triple_doubles">
        <el-input v-model="ruleForm.triple_doubles" class="width-190" placeholder="place iput" />
      </el-form-item>
      <!-- <el-form-item label="free_throws_made" prop="free_throws_made">
        <el-input
          v-model="ruleForm.free_throws_made"
          class="width-190"
          placeholder="place iput"
          type="textarea"
          autosize
        />
      </el-form-item> -->

      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">Save</el-button>
        <el-button @click="resetForm(ruleFormRef)" v-if="query.id ? false : true">Reset</el-button>
      </el-form-item>
    </el-form>
  </ContentDetailWrap>
</template>

<style lang="less">
.width-190 {
  width: 290px;
}
</style>
