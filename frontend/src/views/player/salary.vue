<script setup lang="tsx">
import { ContentWrap } from '@/components/ContentWrap'
import { Search } from '@/components/Search'
import { ElButton, ElMessageBox, ElMessage } from 'element-plus'
import { Table, TableColumn } from '@/components/Table'
import { getPlayerListApi, delPlayerApi, getPlayerSalaryListApi } from '@/api/PlayerGroup/index'
import { getCoachListApi, delCoachApi } from '@/api/CoachGroup/index'
import { useTable } from '@/hooks/web/useTable'
import { RuleForm } from '@/api/PlayerGroup/types'
import { reactive, ref, unref } from 'vue'
import { useRouter } from 'vue-router'
import { useEmitt } from '@/hooks/event/useEmitt'
import { CrudSchema, useCrudSchemas } from '@/hooks/web/useCrudSchemas'
import dayjs from 'dayjs'

defineOptions({
  name: 'PlayerSalaryGroup'
})

const { push } = useRouter()

const searchParams = ref({})

const { tableRegister, tableState, tableMethods } = useTable({
  fetchDataApi: async () => {
    const { currentPage, pageSize } = tableState
    const res = await getPlayerSalaryListApi({
      page: unref(currentPage),
      limit: unref(pageSize),
      ...unref(searchParams)
    })
    console.log('res=', res)
    return {
      list: res.items,
      total: res.meta.total
    }
  }
})

const { loading, dataList, total, currentPage, pageSize } = tableState

const { getList } = tableMethods

useEmitt({
  name: 'getPlayerSalaryList',
  callback: (type: string) => {
    if (type === 'add') {
      currentPage.value = 1
    }
    getList()
  }
})
const crudSchemas = reactive<CrudSchema[]>([
  {
    field: 'player_id',
    label: 'Player Id',
    search: {
      hidden: true
    }
  },
  {
    field: 'name',
    label: 'player name',
    search: {
      component: 'Input'
    },
    form: {
      component: 'Input',
      colProps: {
        span: 24
      }
    },
    detail: {
      span: 24
    }
  },
  {
    field: 'team_name',
    label: 'team name',
    search: {
      component: 'Input'
    },
    form: {
      component: 'Input',
      colProps: {
        span: 24
      }
    },
    detail: {
      span: 24
    }
  },
  {
    field: 'country',
    label: 'country',
    search: {
      component: 'Input'
    },
    form: {
      component: 'Input',
      colProps: {
        span: 24
      }
    },
    detail: {
      span: 24
    }
  },
  {
    field: 'salary',
    label: 'salary',
    search: {
      component: 'Input'
    },
    form: {
      component: 'Input',
      colProps: {
        span: 24
      }
    },
    detail: {
      span: 24
    }
  },
  {
    field: 'jersey_number',
    label: 'jersey number',
    search: {
      hidden: true
    }
  },
  {
    field: 'salary_rank',
    label: 'salary_rank',
    search: {
      hidden: true
    }
  },
  {
    field: 'salary_per_rank',
    label: 'salary per rank%',
    search: {
      hidden: true
    }
  }
])

const { allSchemas } = useCrudSchemas(crudSchemas)

const action = (row: RuleForm, type: string) => {
  console.log('row=', row, type)
  if (type === 'detail') {
    push(`/player/detail?id=${row.player_id}`)
  } else if (type === 'edit') {
    push(`/player/add?id=${row.player_id}`)
  } else if (type === 'delete') {
    ElMessageBox.confirm('is deleted?', 'tips', {
      confirmButtonText: 'ok',
      cancelButtonText: 'cancel',
      type: 'warning'
    }).then(async () => {
      const res = await delPlayerApi({ player_id: row.player_id, type: 'del' }).catch(() => {})
      if (res) {
        ElMessage.success('delete success')
        getList()
      }
    })
  } else if (type === 'detail') {
    push(`/player/add?id=${row.player_id}`)
  }
}

const setSearchParams = (params: any) => {
  searchParams.value = params
  getList()
}
const creatAction = () => {
  push('/player/add')
}
</script>

<template>
  <ContentWrap>
    <Search :schema="allSchemas.searchSchema" @search="setSearchParams" />

    <!-- <div class="mb-10px">
      <ElButton type="primary" @click="creatAction">新增</ElButton>
    </div> -->

    <Table
      v-model:pageSize="pageSize"
      v-model:currentPage="currentPage"
      :columns="allSchemas.tableColumns"
      :data="dataList"
      :loading="loading"
      :pagination="{
        total: total
      }"
      @register="tableRegister"
    />
  </ContentWrap>
</template>

<style lang="less">
.input-number {
  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    display: none;
  }
}

.action-btns {
  gap: 12px;
  .el-button {
    margin-left: 0;
    /* margin-right: 12px; */
  }
}
</style>
