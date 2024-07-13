<script setup lang="ts">
import { ContentDetailWrap } from '@/components/ContentDetailWrap'
import { useEmitt } from '@/hooks/event/useEmitt'
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'
import type { RuleForm } from '@/api/SeasonGroup/types'
import {
  addSeasonAPi,
  getSeasonListApi,
  updateSeasonApi,
  getPlayerkv
} from '@/api/SeasonGroup/index'
import { getTeamListApi } from '@/api/TeamGroup/index'
import { ElForm, ElFormItem, ElButton, ElInput, ElMessage, ElSelect, ElOption } from 'element-plus'
const { push, go } = useRouter()
const { emitter } = useEmitt()
const rules = reactive<FormRules<RuleForm>>({
  season_year: [{ required: true, message: 'team name is required', trigger: 'blur' }],
  mvp: [{ required: true, message: 'coach name is required', trigger: 'blur' }],
  champion_team: [{ required: true, message: 'start_year are required', trigger: 'blur' }]
})

const ruleFormRef = ref<FormInstance>()
const TeamOptions = ref<any[]>([])
const MvpOptions = ref<any[]>([])
const { query } = useRoute()
const loading = ref(false)

const editInitLoading = ref(false)

const ruleForm = reactive<any>({
  season_id: '',
  champion_teamid: '',
  mvp: '',
  player_id: '',
  season_year: ''
})
const getTableDet = async () => {
  editInitLoading.value = true
  const res_data = await getSeasonListApi({ season_id: query.id })
  console.log('res_data', res_data)
  if (res_data) {
    // ruleForm.value = res_data?.items[0]
    let res = res_data?.items[0]
    Object.assign(ruleForm, res)
    // let coach = TeamOptions.value.filter((item) => {
    //   // console.log('item=', item.name, res.coach_name)
    //   return item.name == res.team_name
    // })
    // // console.log('coach=', coach)
    // ruleForm.coach = coach[0]?.id
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
// get player list
const playerList = async () => {
  const res = await getPlayerkv()
  MvpOptions.value = res?.items.map((item) => {
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
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      // console.log('submit!', ruleForm.pages, ruleForm.pages.split(','))
      // const pages = ruleForm.options.split(',').map((item) => item.trim())
      console.log('ruleForm=', ruleForm)
      loading.value = true
      let mvpKv = MvpOptions.value.filter((item) => {
        // console.log('mvpKv', ruleForm.player_id, item.id)
        return ruleForm.player_id == item.id
      })
      // console.log('mvpKv', mvpKv)
      ruleForm.mvp = mvpKv[0]?.name ?? ''
      const params = {
        champion_teamid: ruleForm.champion_teamid,
        mvp: ruleForm.mvp,
        player_id: ruleForm.player_id,
        season_year: ruleForm.season_year
      }
      let res
      if (query.id) {
        const editParams = {
          season_id: ruleForm.season_id,
          champion_teamid: ruleForm.champion_teamid,
          mvp: ruleForm.mvp,
          player_id: ruleForm.player_id,
          season_year: ruleForm.season_year
        }
        res = await updateSeasonApi(editParams)
          .catch(() => {})
          .finally(() => {
            loading.value = false
          })
      } else {
        res = await addSeasonAPi(params)
          .catch(() => {})
          .finally(() => {
            loading.value = false
          })
      }
      if (res) {
        ElMessage.success(query.id ? 'update success' : 'save success')
        // emitter.emit('getApkList', 'add')
        push('/season/list')
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
  <ContentDetailWrap :title="query.id ? 'edit' : 'add'" @back="push('/season/list')">
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
      <el-form-item label="Season year" prop="season_year">
        <el-input
          v-model="ruleForm.season_year"
          class="width-190"
          placeholder="place input"
          :disabled="query.id ? true : false"
        />
      </el-form-item>
      <el-form-item label="champion team ">
        <el-select
          v-model="ruleForm.champion_teamid"
          class="width-190"
          placeholder="select team name"
        >
          <el-option
            v-for="item in TeamOptions"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="MVP ">
        <el-select v-model="ruleForm.player_id" class="width-190" placeholder="select team name">
          <el-option
            v-for="item in MvpOptions"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
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
