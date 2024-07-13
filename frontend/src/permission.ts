import router from './router'
// import { useAppStoreWithOut } from '@/store/modules/app'
import { useStorage } from '@/hooks/web/useStorage'
import type { RouteRecordRaw } from 'vue-router'
import { useTitle } from '@/hooks/web/useTitle'
import { useNProgress } from '@/hooks/web/useNProgress'
import { usePermissionStoreWithOut } from '@/store/modules/permission'
import { usePageLoading } from '@/hooks/web/usePageLoading'
import { loginApi } from '@/api/login'
import { useAppStore } from '@/store/modules/app'

const permissionStore = usePermissionStoreWithOut()

const appStore = useAppStore()

// const dictStore = useDictStoreWithOut()

const { start, done } = useNProgress()

const { loadStart, loadDone } = usePageLoading()

router.beforeEach(async (to, from, next) => {
  start()
  loadStart()
  // const res = await loginApi()
  // if (res.data.realName) {
  // }
  const realeName = appStore.getUserInfo.uname
  console.log('real', realeName)
  if (realeName) {
    if (permissionStore.getIsAddRouters) {
      next()
      return
    }
    await permissionStore.generateRoutes('none')
    permissionStore.getAddRouters.forEach((route) => {
      router.addRoute(route as unknown as RouteRecordRaw) // 动态添加可访问路由表
    })
    const redirectPath = from.query.redirect || to.path
    const redirect = decodeURIComponent(redirectPath as string)
    const nextData = to.path === redirect ? { ...to, replace: true } : { path: redirect }
    permissionStore.setIsAddRouters(true)
    console.log('nextData', nextData)
    next(nextData)
  } else {
    let res
    if (import.meta.env.DEV) {
      res = {
        realName: 'admin',
        email: '',
        phone: '',
        uname: ''
      }
    } else {
      res = await loginApi()
    }
    if (res.realName) {
      appStore.setUserInfo(res)
      if (permissionStore.getIsAddRouters) {
        next()
        return
      }
      await permissionStore.generateRoutes('none')
      permissionStore.getAddRouters.forEach((route) => {
        router.addRoute(route as unknown as RouteRecordRaw) // 动态添加可访问路由表
      })
      const redirectPath = from.query.redirect || to.path
      const redirect = decodeURIComponent(redirectPath as string)
      const nextData = to.path === redirect ? { ...to, replace: true } : { path: redirect }
      permissionStore.setIsAddRouters(true)
      console.log('nextData', nextData)
      next(nextData)
    }
  }
})

router.afterEach((to) => {
  useTitle(to?.meta?.title as string)
  done() // 结束Progress
  loadDone()
})
