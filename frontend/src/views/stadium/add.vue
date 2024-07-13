<script setup lang="ts">
import { ContentDetailWrap } from '@/components/ContentDetailWrap'
import { useEmitt } from '@/hooks/event/useEmitt'
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import type { FormInstance, FormRules } from 'element-plus'
import type { RuleForm } from '@/api/StadiumGroup/types'
import { addStadiumAPi, updateStadiumApi, getStadiumListApi } from '@/api/StadiumGroup/index'
import { ElForm, ElFormItem, ElButton, ElInput, ElMessage, ElSelect, ElOption } from 'element-plus'
const { push, go } = useRouter()
const { emitter } = useEmitt()
const rules = reactive<FormRules<RuleForm>>({
  stadium_name: [{ required: true, message: 'stadium name is required', trigger: 'blur' }],
  location: [{ required: true, message: 'location name is required', trigger: 'blur' }],
  std_size: [{ required: true, message: 'std_size are required', trigger: 'blur' }]
})

const ruleFormRef = ref<FormInstance>()
const { query } = useRoute()
const loading = ref(false)

const editInitLoading = ref(false)

const ruleForm = reactive<any>({
  stadium_name: '',
  location: '',
  std_size: ''
})
const getTableDet = async () => {
  editInitLoading.value = true
  const res_data = await getStadiumListApi({ stadium_id: query.id })
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
          stadium_id: ruleForm.stadium_id,
          stadium_name: ruleForm.stadium_name,
          location: ruleForm.location,
          std_size: ruleForm.std_size
        }
        res = await updateStadiumApi(editParams)
          .catch(() => {})
          .finally(() => {
            loading.value = false
          })
      } else {
        res = await addStadiumAPi(params)
          .catch(() => {})
          .finally(() => {
            loading.value = false
          })
      }
      if (res) {
        ElMessage.success(query.id ? 'update success' : 'save success')
        // emitter.emit('getApkList', 'add')
        push('/stadium/list')
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
  <ContentDetailWrap :title="query.id ? 'edit' : 'add'" @back="push('/stadium/list')">
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
      <el-form-item label="Stadium Name" prop="stadium_name">
        <el-input
          v-model="ruleForm.stadium_name"
          class="width-190"
          placeholder="place input"
          :disabled="query.id ? true : false"
        />
      </el-form-item>
      <el-form-item label="city" prop="location">
        <el-input v-model="ruleForm.location" class="width-190" placeholder="place input year" />
      </el-form-item>
      <el-form-item label="std_size" prop="std_size">
        <el-input v-model="ruleForm.std_size" class="width-190" placeholder="place iput" />
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
