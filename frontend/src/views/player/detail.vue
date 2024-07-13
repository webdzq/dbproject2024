<script setup lang="tsx">
import { ContentWrap } from '@/components/ContentWrap'
import { Search } from '@/components/Search'
import { ElButton, ElMessageBox, ElMessage } from 'element-plus'
import { Table, TableColumn } from '@/components/Table'
import {
  getPlayerListApi,
  delPlayerApi,
  getPlayerDetailList,
  delPlayerDetailApi
} from '@/api/PlayerGroup/index'
import { getCoachListApi, delCoachApi } from '@/api/CoachGroup/index'
import { useTable } from '@/hooks/web/useTable'
import { RuleForm } from '@/api/PlayerGroup/types'
import { reactive, ref, unref } from 'vue'
import { useRouter } from 'vue-router'
import { useEmitt } from '@/hooks/event/useEmitt'
import { CrudSchema, useCrudSchemas } from '@/hooks/web/useCrudSchemas'
import dayjs from 'dayjs'

defineOptions({
  name: 'PlayerDetailGroup'
})

const { push } = useRouter()

const searchParams = ref({})

const { tableRegister, tableState, tableMethods } = useTable({
  fetchDataApi: async () => {
    const { currentPage, pageSize } = tableState
    const res = await getPlayerDetailList({
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
  name: 'getPlayerDetailList',
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
    label: 'id',
    search: {
      hidden: true
    }
  },
  {
    field: 'name',
    label: 'player name',
    search: {
      hidden: true
    }
  },
  {
    field: 'game_season',
    label: 'game season',
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
    field: 'game_played_count',
    label: 'game_played',
    search: {
      hidden: true
    }
  },
  {
    field: 'min_played',
    label: 'min_played',
    search: {
      hidden: true
    }
  },
  {
    field: 'points',
    label: 'points',
    search: {
      hidden: true
    }
  },
  {
    field: 'field_goals_made',
    label: 'field_goals_made',
    search: {
      hidden: true
    }
  },
  {
    field: 'field_goals_attempted',
    label: 'field_goals_attempted',
    search: {
      hidden: true
    }
  },
  {
    field: 'field_goals_percentage',
    label: 'field_goals_percentage',
    search: {
      hidden: true
    }
  },
  {
    field: 'number_3_points_goal_made',
    label: '3_points_goal_made',
    search: {
      hidden: true
    }
  },
  {
    field: 'number_3_points_goal_attempted',
    label: '3_points_goal_attempted',
    search: {
      hidden: true
    }
  },
  {
    field: 'number_3_points_goal_percentage',
    label: '3_points_goal_Percentage',
    search: {
      hidden: true
    }
  },
  {
    field: 'free_throws_made',
    label: 'free_throws_made',
    search: {
      hidden: true
    }
  },
  {
    field: 'free_throws_attempted',
    label: 'free_throws_attempted',
    search: {
      hidden: true
    }
  },
  {
    field: 'free_throw_percentage',
    label: 'free_throw_percentage',
    search: {
      hidden: true
    }
  },
  {
    field: 'offensive_rebounds',
    label: 'offensive_rebounds',
    search: {
      hidden: true
    }
  },
  {
    field: 'defensive_rebounds',
    label: 'defensive_rebounds',
    search: {
      hidden: true
    }
  },
  {
    field: 'total_rebounds',
    label: 'total_rebounds',
    search: {
      hidden: true
    }
  },
  {
    field: 'assists',
    label: 'assists',
    search: {
      hidden: true
    }
  },
  {
    field: 'turnovers',
    label: 'turnovers',
    search: {
      hidden: true
    }
  },
  {
    field: 'steels',
    label: 'steels',
    search: {
      hidden: true
    }
  },
  {
    field: 'blocks',
    label: 'blocks',
    search: {
      hidden: true
    }
  },
  {
    field: 'personal_fouls',
    label: 'personal_fouls',
    search: {
      hidden: true
    }
  },
  {
    field: 'fantacy_points',
    label: 'fantacy_points',
    search: {
      hidden: true
    }
  },
  {
    field: 'doubles_doubles',
    label: 'doubles_doubles',
    search: {
      hidden: true
    }
  },
  {
    field: 'triple_doubles',
    label: 'triple_doubles',
    search: {
      hidden: true
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
  if (type === 'detail') {
    push(`/player/detail?id=${row.player_id}`)
  } else if (type === 'edit') {
    push(`/player/edit?id=${row.player_id}`)
  } else if (type === 'delete') {
    ElMessageBox.confirm('is deleted?', 'tips', {
      confirmButtonText: 'ok',
      cancelButtonText: 'cancel',
      type: 'warning'
    }).then(async () => {
      const res = await delPlayerDetailApi({
        player_id: row.player_id,
        game_id: row.game_id,
        team_id: row.team_id,
        type: 'del'
      }).catch(() => {})
      if (res) {
        ElMessage.success('delete success')
        getList()
      }
    })
  } else if (type === 'add') {
    push(`/player/add?id=${row.player_id}`)
  }
}

const creatAction = () => {
  push('/player/edit')
}

const setSearchParams = (params: any) => {
  searchParams.value = params
  getList()
}
</script>

<template>
  <ContentWrap>
    <Search :schema="allSchemas.searchSchema" @search="setSearchParams" />

    <div class="mb-10px">
      <ElButton type="primary" @click="creatAction">add</ElButton>
    </div>

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
