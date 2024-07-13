import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'
import { Layout } from '@/utils/routerHelper'
import { useI18n } from '@/hooks/web/useI18n'
const { t } = useI18n()

export const constantRouterMap: AppRouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/team/list',
    name: 'Root',
    meta: {
      hidden: true
    }
  },
  {
    path: '/redirect',
    component: Layout,
    name: 'Redirect',
    children: [
      {
        path: '/redirect/:path(.*)',
        name: 'Redirect',
        component: () => import('@/views/Redirect/Redirect.vue'),
        meta: {}
      }
    ],
    meta: {
      hidden: true,
      noTagsView: true
    }
  },
  {
    path: '/login',
    component: () => import('@/views/Login/Login.vue'),
    name: 'Login',
    meta: {
      hidden: true,
      title: t('router.login'),
      noTagsView: true
    }
  },
  {
    path: '/404',
    component: () => import('@/views/Error/404.vue'),
    name: 'NoFind',
    meta: {
      hidden: true,
      title: '404',
      noTagsView: true
    }
  }
]

export const asyncRouterMap: AppRouteRecordRaw[] = [
  {
    path: '/team',
    component: Layout,
    redirect: '/team/list',
    name: 'team_group',
    meta: {
      title: 'team group',
      icon: 'cib:telegram-plane',
      alwaysShow: false
    },
    children: [
      {
        path: 'list',
        component: () => import('@/views/team/index.vue'),
        name: 'team_list',
        meta: {
          title: 'team list'
        }
      },
      {
        path: 'add',
        component: () => import('@/views/team/add.vue'),
        name: 'team_add',
        meta: {
          title: 'add team'
        }
      },
      {
        path: 'edit',
        component: () => import('@/views/team/add.vue'),
        name: 'team_update',
        meta: {
          title: 'edit team',
          hidden: true,
          activeMenu: '/team/List'
        }
      }
    ]
  },
  {
    path: '/player',
    component: Layout,
    redirect: '/player/list',
    name: 'player_group',
    meta: {
      title: 'player group',
      icon: 'cib:osi',
      alwaysShow: false
    },
    children: [
      {
        path: 'list',
        component: () => import('@/views/player/index.vue'),
        name: 'player_list',
        meta: {
          title: 'player list'
        }
      },
      {
        path: 'add',
        component: () => import('@/views/player/add.vue'),
        name: 'player_add',
        meta: {
          title: 'add player'
        }
      },
      {
        path: 'edit',
        component: () => import('@/views/player/edit.vue'),
        name: 'player_edit',
        meta: {
          title: 'add player detail',
          hidden: true,
          activeMenu: '/player/list'
        }
      },
      {
        path: 'salary',
        component: () => import('@/views/player/salary.vue'),
        name: 'player_salary_list',
        meta: {
          title: 'salary list'
        }
      },
      {
        path: 'mvp',
        component: () => import('@/views/player/mvp.vue'),
        name: 'player_mvp_list',
        meta: {
          title: 'mvp list'
        }
      },
      {
        path: 'detail',
        component: () => import('@/views/player/detail.vue'),
        name: 'player_detail_list',
        meta: {
          title: 'player detail data'
        }
      }
    ]
  },
  {
    path: '/coach',
    component: Layout,
    redirect: '/coach/list',
    name: 'coach_group',
    meta: {
      title: 'coach group',
      icon: 'cib:qq',
      alwaysShow: false
    },
    children: [
      {
        path: 'list',
        component: () => import('@/views/coach/index.vue'),
        name: 'coach_list',
        meta: {
          title: 'coach list'
        }
      },
      {
        path: 'add',
        component: () => import('@/views/coach/add.vue'),
        name: 'coach_add',
        meta: {
          title: 'add coach'
        }
      }
    ]
  },
  {
    path: '/game',
    component: Layout,
    redirect: '/game/list',
    name: 'game_group',
    meta: {
      title: 'game group',
      icon: 'cib:safari',
      alwaysShow: false
    },
    children: [
      {
        path: 'list',
        component: () => import('@/views/game/index.vue'),
        name: 'game_list',
        meta: {
          title: 'game list'
        }
      },
      {
        path: 'add',
        component: () => import('@/views/game/add.vue'),
        name: 'game_add',
        meta: {
          title: 'add game'
        }
      }
    ]
  },
  {
    path: '/stadium',
    component: Layout,
    redirect: '/stadium/list',
    name: 'stadium_group',
    meta: {
      title: 'stadium group',
      icon: 'cib:react',
      alwaysShow: false
    },
    children: [
      {
        path: 'list',
        component: () => import('@/views/stadium/index.vue'),
        name: 'stadium_list',
        meta: {
          title: 'stadium list'
        }
      },
      {
        path: 'add',
        component: () => import('@/views/stadium/add.vue'),
        name: 'stadium_add',
        meta: {
          title: 'add stadium'
        }
      }
    ]
  },
  {
    path: '/season',
    component: Layout,
    redirect: '/season/list',
    name: 'season_group',
    meta: {
      title: 'season group',
      icon: 'cib:scribd',
      alwaysShow: false
    },
    children: [
      {
        path: 'list',
        component: () => import('@/views/season/index.vue'),
        name: 'season_list',
        meta: {
          title: 'season list'
        }
      },
      {
        path: 'add',
        component: () => import('@/views/season/add.vue'),
        name: 'season_add',
        meta: {
          title: 'add season data'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  strict: true,
  routes: constantRouterMap as RouteRecordRaw[],
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export const resetRouter = (): void => {
  const resetWhiteNameList = ['Redirect', 'Login', 'NoFind', 'Root']
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && !resetWhiteNameList.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}

export default router
