<script setup lang="tsx">
import { ContentWrap } from '@/components/ContentWrap'
import { Search } from '@/components/Search'
import { ElButton, ElMessageBox, ElMessage } from 'element-plus'
import { Table, TableColumn } from '@/components/Table'
import { getGameListApi, delGameApi } from '@/api/GameGroup/index'
import { useTable } from '@/hooks/web/useTable'
import { RuleForm } from '@/api/GameGroup/types'
import { reactive, ref, unref } from 'vue'
import { useRouter } from 'vue-router'
import { useEmitt } from '@/hooks/event/useEmitt'
import { CrudSchema, useCrudSchemas } from '@/hooks/web/useCrudSchemas'
import dayjs from 'dayjs'

defineOptions({
  name: 'GameGroup'
})

const { push } = useRouter()

const searchParams = ref({})

const { tableRegister, tableState, tableMethods } = useTable({
  fetchDataApi: async () => {
    const { currentPage, pageSize } = tableState
    const res = await getGameListApi({
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
  name: 'getGameList',
  callback: (type: string) => {
    if (type === 'add') {
      currentPage.value = 1
    }
    getList()
  }
})

const crudSchemas = reactive<CrudSchema[]>([
  {
    field: 'game_id',
    // type: 'index',
    label: 'Id',
    search: {
      hidden: true
    }
  },
  {
    field: 'game_season',
    label: 'game_season',
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
    field: 'stadium_name',
    label: 'stadium_name',
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
    field: 'home_team',
    label: 'home_team',
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
    field: 'away_team',
    label: 'away_team',
    search: {
      hidden: false
    }
  },
  {
    field: 'score_winner',
    label: 'score_winner',
    search: {
      hidden: true
    }
  },
  {
    field: 'score_loser',
    label: 'score_loser',
    search: {
      hidden: true
    }
  },
  {
    field: 'game_date',
    label: 'game_date',
    search: {
      hidden: false
    }
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
    push(`/game/add?id=${row.game_id}`)
  } else if (type === 'delete') {
    ElMessageBox.confirm('is deleted?', 'tips', {
      confirmButtonText: 'ok',
      cancelButtonText: 'cancel',
      type: 'warning'
    }).then(async () => {
      const res = await delGameApi({ game_id: row.game_id, type: 'del' }).catch(() => {})
      if (res) {
        ElMessage.success('delete success')
        getList()
      }
    })
  } else if (type === 'detail') {
    push(`/game/add?id=${row.game_id}`)
  }
}

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
