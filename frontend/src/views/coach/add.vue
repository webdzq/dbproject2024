<script setup lang="ts">
import { ContentDetailWrap } from '@/components/ContentDetailWrap'
import { useEmitt } from '@/hooks/event/useEmitt'
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'
import type { RuleForm } from '@/api/CoachGroup/types'
import {
  addCoachAPi,
  getCoachListApi,
  getTeamListApi,
  updateCoachApi
} from '@/api/CoachGroup/index'
import { ElForm, ElFormItem, ElButton, ElInput, ElMessage, ElSelect, ElOption } from 'element-plus'
const { push, go } = useRouter()
const { emitter } = useEmitt()
const rules = reactive<FormRules<RuleForm>>({
  team_name: [{ required: true, message: 'team name is required', trigger: 'blur' }],
  coach_name: [{ required: true, message: 'coach name is required', trigger: 'blur' }],
  start_year: [{ required: true, message: 'start_year are required', trigger: 'blur' }]
})

const ruleFormRef = ref<FormInstance>()
const TeamOptions = ref<any[]>([])
const { query } = useRoute()
const loading = ref(false)

const editInitLoading = ref(false)

const ruleForm = reactive<any>({
  coach_name: '',
  nationality: '',
  start_year: 1970,
  num_champion: ''
})
const getTableDet = async () => {
  editInitLoading.value = true
  const res_data = await getCoachListApi({ coach_id: query.id })
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
          coach_id: ruleForm.coach_id,
          coach_name: ruleForm.coach_name,
          nationality: ruleForm.nationality,
          start_year: ruleForm.start_year,
          num_champion: ruleForm.num_champion
        }
        res = await updateCoachApi(editParams)
          .catch(() => {})
          .finally(() => {
            loading.value = false
          })
      } else {
        res = await addCoachAPi(params)
          .catch(() => {})
          .finally(() => {
            loading.value = false
          })
      }
      if (res) {
        ElMessage.success(query.id ? 'update success' : 'save success')
        // emitter.emit('getApkList', 'add')
        push('/coach/list')
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
  <ContentDetailWrap :title="query.id ? 'edit' : 'add'" @back="push('/coach/list')">
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
      <el-form-item label="Coach Name" prop="coach_name">
        <el-input
          v-model="ruleForm.coach_name"
          class="width-190"
          placeholder="place input"
          :disabled="query.id ? true : false"
        />
      </el-form-item>
      <el-form-item label="start year" prop="start_year">
        <el-input v-model="ruleForm.start_year" class="width-190" placeholder="place input year" />
      </el-form-item>
      <!-- <el-form-item label="team_name ">
        <el-select v-model="ruleForm.coach" class="width-190" placeholder="select team name">
          <el-option
            v-for="item in TeamOptions"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
      </el-form-item> -->
      <el-form-item label="nationality" prop="nationality">
        <el-input v-model="ruleForm.nationality" class="width-190" placeholder="place iput" />
      </el-form-item>
      <el-form-item label="num_champion" prop="num_champion">
        <el-input
          v-model="ruleForm.num_champion"
          class="width-190"
          placeholder="place iput num_champion"
          type="number"
          min="0"
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
