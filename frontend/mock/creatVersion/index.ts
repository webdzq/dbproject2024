import config from '@/config/axios/config'
import { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs'
import { string } from 'vue-types'

const { code } = config

const Random = Mock.Random

const timeout = 500

const count = 100

const List: {
  pageNmae: string
  pageUrl: string
  md5: string
  commitId: string
  module: string
  uploadTime: string
  name: string
}[] = []

for (let i = 0; i < count; i++) {
  List.push(
    Mock.mock({
      pageNmae: Random.ctitle(3, 5),
      pageUrl: Random.url(),
      md5: Random.string('lower', 15),
      commitId: Random.string('number', 5),
      module: Random.ctitle(3, 10),
      uploadTime: Random.date(),
      name: Random.cname()
    })
  )
}

const versionList: {
  id: string
  apkName: string
  versionNo: string
  status: string
  statusName: string
  forcedOnline: string
  equipmentType: string
  equipemntName: string
  updateName: string
  updateTime: string
}[] = []

for (let i = 0; i < count; i++) {
  versionList.push(
    Mock.mock({
      id: Random.increment(),
      apkName: Random.ctitle(3, 10),
      versionNo: Random.string('number', 5, 10),
      status: Random.natural(0, 10),
      statusName: Random.cword(3, 10),
      forcedOnline: Random.natural(0, 1),
      equipmentType: Random.cword(3, 10),
      equipemntName: Random.cword(3, 10),
      updateName: Random.cname(),
      updateTime: Random.date()
    })
  )
}

export default [
  // 列表接口
  {
    url: '/page/list',
    method: 'post',
    timeout,
    response: ({ body }) => {
      const { pageNo, pageSize } = body
      const mockList = List
      // const pageList = mockList
      const pageList = mockList.filter(
        (_, index) => index < pageSize * pageNo && index >= pageSize * (pageNo - 1)
      )
      return {
        code: code,
        data: {
          total: mockList.length,
          list: pageList
        }
      }
    }
  },
  // /version/list
  {
    url: '/version/list',
    method: 'post',
    timeout,
    response: ({ body }) => {
      const { pageNo, pageSize } = body
      const mockList = versionList
      // const pageList = mockList
      const pageList = mockList.filter(
        (_, index) => index < pageSize * pageNo && index >= pageSize * (pageNo - 1)
      )
      return {
        code: code,
        data: {
          total: mockList.length,
          list: pageList
        }
      }
    }
  },
  {
    url: '/packages/add',
    method: 'post',
    timeout,
    response: () => {
      return {
        code: code,
        data: 'success'
      }
    }
  },

] as MockMethod[]
