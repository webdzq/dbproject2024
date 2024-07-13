<script setup lang="ts">
import { ContentDetailWrap } from '@/components/ContentDetailWrap'
import { useEmitt } from '@/hooks/event/useEmitt'
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'
import type { RuleForm } from '@/api/PlayerGroup/types'
import { addPlayerAPi, getPlayerListApi, updatePlayerApi } from '@/api/PlayerGroup/index'
import { getTeamListApi } from '@/api/TeamGroup/index'
import { ElForm, ElFormItem, ElButton, ElInput, ElMessage, ElSelect, ElOption } from 'element-plus'
import { object } from 'vue-types'
const { push, go } = useRouter()
const { emitter } = useEmitt()
const rules = reactive<FormRules<RuleForm>>({
  name: [{ required: true, message: 'player name is required', trigger: 'blur' }],
  team_id: [{ required: true, message: 'team name is required', trigger: 'blur' }],
  country: [{ required: true, message: 'country are required', trigger: 'blur' }],
  age: [{ required: true, message: 'age are required', trigger: 'blur' }],
  height: [{ required: true, message: 'height are required', trigger: 'blur' }],
  weight: [{ required: true, message: 'weight are required', trigger: 'blur' }]
})

const ruleFormRef = ref<FormInstance>()
const TeamOptions = ref<any[]>([])
const MvpOptions = ref<any[]>([])
const { query } = useRoute()
const loading = ref(false)

const editInitLoading = ref(false)

const ruleForm = reactive<any>({
  player_id: '',
  name: '',
  age: '',
  jersey_number: '',
  team_name: '',
  guard_position: '',
  height: '',
  weight: '',
  last_attended: '',
  country: '',
  salary: '',
  introduce: '',
  mvp_times: ''
})
const getTableDet = async () => {
  editInitLoading.value = true
  const res_data = await getPlayerListApi({ player_id: query.id })
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
      const params = {
        name: ruleForm.name,
        age: ruleForm.age,
        jersey_number: ruleForm.jersey_number,
        team_name: ruleForm.team_name,
        guard_position: ruleForm.guard_position,
        height: ruleForm.height,
        weight: ruleForm.weight,
        last_attended: ruleForm.last_attended,
        country: ruleForm.country,
        salary: ruleForm.salary,
        introduce: ruleForm.introduce
      }
      let res
      if (query.id) {
        const editParams = Object.assign(
          {
            player_id: ruleForm.player_id
          },
          params
        )
        res = await updatePlayerApi(editParams)
          .catch(() => {})
          .finally(() => {
            loading.value = false
          })
      } else {
        res = await addPlayerAPi(params)
          .catch(() => {})
          .finally(() => {
            loading.value = false
          })
      }
      if (res) {
        ElMessage.success(query.id ? 'update success' : 'save success')
        // emitter.emit('getApkList', 'add')
        push('/player/list')
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
  <ContentDetailWrap :title="query.id ? 'edit' : 'add'" @back="push('/player/list')">
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
      <el-form-item label="Player Name" prop="name">
        <el-input
          v-model="ruleForm.name"
          class="width-190"
          placeholder="place input"
          :disabled="query.id ? true : false"
        />
      </el-form-item>
      <el-form-item label="age" prop="age">
        <el-input v-model="ruleForm.age" class="width-190" placeholder="place iput" />
      </el-form-item>
      <el-form-item label="team name">
        <el-select v-model="ruleForm.team_name" class="width-190" placeholder="select team name">
          <el-option
            v-for="item in TeamOptions"
            :key="item.id"
            :label="item.name"
            :value="item.name"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="jersey number " prop="jersey_number">
        <el-input v-model="ruleForm.jersey_number" class="width-190" placeholder="place iput" />
      </el-form-item>
      <el-form-item label="guard position" prop="guard_position">
        <el-input v-model="ruleForm.guard_position" class="width-190" placeholder="place iput" />
      </el-form-item>
      <el-form-item label="height" prop="height">
        <el-input v-model="ruleForm.height" class="width-190" placeholder="place iput" />
      </el-form-item>
      <el-form-item label="weight" prop="weight">
        <el-input v-model="ruleForm.weight" class="width-190" placeholder="place iput" />
      </el-form-item>
      <el-form-item label="last_attended" prop="last_attended">
        <el-input v-model="ruleForm.last_attended" class="width-190" placeholder="place iput" />
      </el-form-item>
      <el-form-item label="country" prop="country">
        <el-input v-model="ruleForm.country" class="width-190" placeholder="place iput" />
      </el-form-item>
      <el-form-item label="salary" prop="salary">
        <el-input v-model="ruleForm.salary" class="width-190" placeholder="place iput" />
      </el-form-item>
      <el-form-item label="Introduce" prop="introduce">
        <el-input
          v-model="ruleForm.introduce"
          class="width-190"
          placeholder="place iput"
          type="textarea"
          autosize
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
