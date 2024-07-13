<script setup lang="ts">
import { ContentDetailWrap } from '@/components/ContentDetailWrap'
import { useEmitt } from '@/hooks/event/useEmitt'
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'
import type { RuleForm } from '@/api/TeamGroup/types'
import { addAppApi, updateAppApi, apkDetailApi } from '@/api/pageMap/index'
import {
  addTeamAPi,
  getCoachkv,
  getStadiumList,
  getTeamListApi,
  updateTeamApi
} from '@/api/TeamGroup/index'
import { ElForm, ElFormItem, ElButton, ElInput, ElMessage, ElSelect, ElOption } from 'element-plus'
const { push, go } = useRouter()
const { emitter } = useEmitt()
const rules = reactive<FormRules<RuleForm>>({
  team_name: [{ required: true, message: 'team name is required', trigger: 'blur' }],
  coach_name: [{ required: true, message: 'coach name is required', trigger: 'blur' }],
  city: [{ required: true, message: 'city are required', trigger: 'blur' }],
  year_founded: [{ required: true, message: 'year_founded are required', trigger: 'blur' }]
})

const ruleFormRef = ref<FormInstance>()
const coachOptions = ref<any[]>([])
// get coach list
const cocachList = async () => {
  const res = await getCoachkv()
  coachOptions.value = res?.items.map((item) => {
    let id = item.coach_id
    let name = item.coach_name
    return {
      id: id,
      name: name
    }
  })
  console.log('coachOptions.value', coachOptions.value)
  const getTableDet = async () => {
    editInitLoading.value = true
    const res_data = await getTeamListApi({ team_id: query.id as string })
    // console.log('res_data', res_data)
    if (res_data) {
      // ruleForm.value = res_data?.items[0]
      let res = res_data?.items[0]
      Object.assign(ruleForm, res)
      let coach = coachOptions.value.filter((item) => {
        // console.log('item=', item.name, res.coach_name)
        return item.name == res.coach_name
      })
      // console.log('coach=', coach)
      ruleForm.coach = coach[0]?.id
      editInitLoading.value = false
    }
    // console.log('ruleForm=', ruleForm)
  }
  if (query.id) {
    getTableDet()
  }
}
cocachList()
const stadiumOptions = ref<any[]>([])
// get coach list
const stadiumList = async () => {
  const res = await getStadiumList()
  stadiumOptions.value = res?.items.map((item) => {
    let id = item.stadium_id
    let name = item.stadium_name
    return {
      id: id,
      name: name
    }
  })
  console.log('stadiumOptions.value', stadiumOptions.value)
}
stadiumList()

const { query } = useRoute()

const loading = ref(false)

const editInitLoading = ref(false)

const ruleForm = reactive<any>({
  team_id: '',
  team_name: '',
  city: '',
  coach: '',
  stadium_name: '',
  year_founded: 1970,
  introduce: ''
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      // console.log('submit!', ruleForm.pages, ruleForm.pages.split(','))
      // const pages = ruleForm.options.split(',').map((item) => item.trim())
      console.log('ruleForm=', ruleForm)
      loading.value = true
      const params = Object.assign({}, ruleForm)
      let res
      if (query.id) {
        const editParams = {
          team_id: ruleForm.team_id,
          team_name: ruleForm.team_name,
          city: ruleForm.city,
          coach: ruleForm.coach,
          stadium_name: ruleForm.stadium_name,
          year_founded: ruleForm.year_founded,
          introduce: ruleForm.introduce
        }
        res = await updateTeamApi(editParams)
          .catch(() => {})
          .finally(() => {
            loading.value = false
          })
      } else {
        res = await addTeamAPi(params)
          .catch(() => {})
          .finally(() => {
            loading.value = false
          })
      }
      if (res) {
        ElMessage.success(query.id ? 'update success' : 'save success')
        // emitter.emit('getApkList', 'add')
        push('/team/list')
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
  <ContentDetailWrap :title="query.id ? 'edit' : 'add'" @back="push('/team/list')">
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
      <el-form-item label="Team Name" prop="team_name">
        <el-input
          v-model="ruleForm.team_name"
          class="width-190"
          placeholder="place input"
          :disabled="query.id ? true : false"
        />
      </el-form-item>
      <el-form-item label="city" prop="city">
        <el-input v-model="ruleForm.city" class="width-190" placeholder="place iput" />
      </el-form-item>
      <el-form-item label="year founded" prop="year_founded">
        <el-input
          v-model="ruleForm.year_founded"
          class="width-190"
          placeholder="place input year"
        />
      </el-form-item>
      <el-form-item label="coach name ">
        <el-select v-model="ruleForm.coach" class="width-190" placeholder="select coach name">
          <el-option
            v-for="item in coachOptions"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="Stadium Name">
        <el-select
          v-model="ruleForm.stadium_name"
          class="width-190"
          placeholder="select stadium name"
        >
          <el-option
            v-for="item in stadiumOptions"
            :key="item.id"
            :label="item.name"
            :value="item.name"
          />
        </el-select>
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
