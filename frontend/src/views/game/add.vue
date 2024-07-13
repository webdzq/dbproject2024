<script setup lang="ts">
import { ContentDetailWrap } from '@/components/ContentDetailWrap'
import { useEmitt } from '@/hooks/event/useEmitt'
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'
import type { RuleForm } from '@/api/GameGroup/types'
import { addGameAPi, getGameListApi, updateGameApi } from '@/api/GameGroup/index'
import { getTeamListApi, getStadiumList } from '@/api/TeamGroup/index'
import { ElForm, ElFormItem, ElButton, ElInput, ElMessage, ElSelect, ElOption } from 'element-plus'
const { push, go } = useRouter()
const { emitter } = useEmitt()
const rules = reactive<FormRules<RuleForm>>({
  game_season: [{ required: true, message: 'team name is required', trigger: 'blur' }],
  game_date: [{ required: true, message: 'game_date is required', trigger: 'blur' }],
  stadium_name: [{ required: true, message: 'stadium_name are required', trigger: 'blur' }],
  home_team: [{ required: true, message: 'stadium_name are required', trigger: 'blur' }],
  away_team: [{ required: true, message: 'stadium_name are required', trigger: 'blur' }],
  score_winner: [{ required: true, message: 'stadium_name are required', trigger: 'blur' }],
  score_loser: [{ required: true, message: 'stadium_name are required', trigger: 'blur' }]
})

const ruleFormRef = ref<FormInstance>()
const TeamOptions = ref<any[]>([])
const StadiumOptions = ref<any[]>([])
const { query } = useRoute()
const loading = ref(false)

const editInitLoading = ref(false)

const ruleForm = reactive<any>({
  game_season: '',
  stadium_id: '',
  team_home_id: '',
  team_away_id: '',
  stadium_name: '',
  home_team: '',
  away_team: '',
  score_winner: '',
  score_loser: '',
  game_date: ''
})
const getTableDet = async () => {
  editInitLoading.value = true
  const res_data = await getGameListApi({ game_id: query.id })
  console.log('res_data', res_data)
  if (res_data) {
    // ruleForm.value = res_data?.items[0]
    let res = res_data?.items[0]
    Object.assign(ruleForm, res)
    editInitLoading.value = false
  }
  // console.log('ruleForm=', ruleForm)
}
if (query.id) {
  getTableDet()
}

// get coach list
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
// get coach list
const stadiumList = async () => {
  const res = await getStadiumList()
  StadiumOptions.value = res?.items.map((item) => {
    let id = item.stadium_id
    let name = item.stadium_name
    return {
      id: id,
      name: name
    }
  })
  console.log('stadiumOptions.value', StadiumOptions.value)
}
stadiumList()
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      // console.log('submit!', ruleForm.pages, ruleForm.pages.split(','))
      // const pages = ruleForm.options.split(',').map((item) => item.trim())
      console.log('ruleForm=', ruleForm)
      loading.value = true
      const params = {
        team_home_id: ruleForm.team_home_id,
        team_away_id: ruleForm.team_away_id,
        stadium_id: ruleForm.stadium_id,
        game_season: ruleForm.game_season,
        score_winner: ruleForm.score_winner,
        score_loser: ruleForm.score_loser,
        game_date: ruleForm.game_date
      }
      let res
      if (query.id) {
        const editParams = {
          game_id: ruleForm.game_id,
          team_home_id: ruleForm.team_home_id,
          team_away_id: ruleForm.team_away_id,
          stadium_id: ruleForm.stadium_id,
          game_season: ruleForm.game_season,
          score_winner: ruleForm.score_winner,
          score_loser: ruleForm.score_loser,
          game_date: ruleForm.game_date
        }
        res = await updateGameApi(editParams)
          .catch(() => {})
          .finally(() => {
            loading.value = false
          })
      } else {
        res = await addGameAPi(params)
          .catch(() => {})
          .finally(() => {
            loading.value = false
          })
      }
      if (res) {
        ElMessage.success(query.id ? 'update success' : 'save success')
        // emitter.emit('getApkList', 'add')
        push('/game/list')
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
  <ContentDetailWrap :title="query.id ? 'edit' : 'add'" @back="push('/game/list')">
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
      <el-form-item label="Game season" prop="game_season">
        <el-input
          v-model="ruleForm.game_season"
          class="width-190"
          placeholder="place input"
          :disabled="query.id ? true : false"
        />
      </el-form-item>
      <el-form-item label="game date" prop="game_date">
        <el-input
          v-model="ruleForm.game_date"
          class="width-190"
          placeholder="place input date,format:yyyy-mm-dd"
        />
      </el-form-item>
      <el-form-item label="stadium_name ">
        <el-select v-model="ruleForm.stadium_id" class="width-190" placeholder="select team name">
          <el-option
            v-for="item in StadiumOptions"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="home_team ">
        <el-select v-model="ruleForm.team_home_id" class="width-190" placeholder="select team name">
          <el-option
            v-for="item in TeamOptions"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="away_team ">
        <el-select v-model="ruleForm.team_away_id" class="width-190" placeholder="select team name">
          <el-option
            v-for="item in TeamOptions"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="score_winner" prop="score_winner">
        <el-input
          v-model="ruleForm.score_winner"
          class="width-190"
          placeholder="place iput"
          type="number"
        />
      </el-form-item>
      <el-form-item label="score_loser" prop="score_loser">
        <el-input
          v-model="ruleForm.score_loser"
          class="width-190"
          placeholder="place iput"
          type="number"
        />
      </el-form-item>
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
