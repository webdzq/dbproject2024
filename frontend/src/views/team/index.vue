<script setup lang="tsx">
import { ContentWrap } from '@/components/ContentWrap'
import { Search } from '@/components/Search'
import { ElButton, ElMessageBox, ElMessage } from 'element-plus'
import { Table, TableColumn } from '@/components/Table'
import { getTeamListApi, delTeamApi } from '@/api/TeamGroup/index'
import { useTable } from '@/hooks/web/useTable'
import { RuleForm } from '@/api/TeamGroup/types'
import { reactive, ref, unref } from 'vue'
import { useRouter } from 'vue-router'
import { useEmitt } from '@/hooks/event/useEmitt'
import { CrudSchema, useCrudSchemas } from '@/hooks/web/useCrudSchemas'
import dayjs from 'dayjs'

defineOptions({
  name: 'TeamGroup'
})

const { push } = useRouter()

const searchParams = ref({})

const { tableRegister, tableState, tableMethods } = useTable({
  fetchDataApi: async () => {
    const { currentPage, pageSize } = tableState
    const res = await getTeamListApi({
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
  name: 'getTeamList',
  callback: (type: string) => {
    if (type === 'add') {
      currentPage.value = 1
    }
    getList()
  }
})

const crudSchemas = reactive<CrudSchema[]>([
  {
    field: 'team_id',
    // type: 'index',
    label: 'Id',
    search: {
      hidden: true
    }
  },
  {
    field: 'team_name',
    label: 'Team_Name',
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
    field: 'city',
    label: 'city',
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
    field: 'coach_name',
    label: 'Coach_name'
  },
  {
    field: 'stadium_name',
    label: 'Stadium_Name',
    search: {
      component: 'Input'
    }
  },
  {
    field: 'num_player',
    label: 'num_player',
    search: {
      hidden: true
    }
  },
  {
    field: 'num_champion',
    label: 'num_champion',
    search: {
      hidden: true
    }
  },
  {
    field: 'year_founded',
    label: 'year_founded',
    search: {
      hidden: true
    }
    // formatter: (_: Recordable, __: TableColumn, cellValue: number) => {
    //   return dayjs(cellValue).format('YYYY-MM-DD HH:mm:ss')
    // }
  },
  {
    field: 'action',
    label: 'options',
    width: '240px',
    search: {
      hidden: true
    },
    form: {
      hidden: true
    },
    detail: {
      hidden: true
    },
    table: {
      slots: {
        default: (data: any) => {
          return (
            <>
              <div class="action-btns" style="display: flex; flex-wrap: wrap">
                <ElButton type="primary" onClick={() => action(data[0].row, 'delete')}>
                  delete
                </ElButton>
                <ElButton type="primary" onClick={() => action(data[0].row, 'edit')}>
                  edit
                </ElButton>
              </div>
            </>
          )
        }
      }
    }
  }
])

const { allSchemas } = useCrudSchemas(crudSchemas)

const action = (row: RuleForm, type: string) => {
  console.log('row=', row, type)
  if (type === 'edit') {
    push(`/team/add?id=${row.team_id}`)
  } else if (type === 'delete') {
    ElMessageBox.confirm('is deleted?', 'tips', {
      confirmButtonText: 'ok',
      cancelButtonText: 'cancel',
      type: 'warning'
    }).then(async () => {
      const res = await delTeamApi({ team_id: row.team_id, type: 'del' }).catch(() => {})
      if (res) {
        ElMessage.success('delete success')
        getList()
      }
    })
  } else if (type === 'detail') {
    push(`/team/add?id=${row.team_id}`)
  }
}

// const creatAction = () => {
//   push('/localization/page-map/add')
// }

const setSearchParams = (params: any) => {
  searchParams.value = params
  getList()
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
