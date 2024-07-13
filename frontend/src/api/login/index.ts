import request from '@/config/axios'
import type { UserType } from './types'

interface RoleParams {
  roleName: string
}

export const loginApi = (): Promise<IResponse<UserType>> => {
  return request.get({ url: '/api/auth/userinfo' })
}

export const loginOutApi = (): Promise<IResponse> => {
  return request.get({ url: '/api/auth/loginOut' })
}

export const getUserListApi = ({ params }: AxiosConfig) => {
  return request.get<{
    code: string
    data: {
      list: UserType[]
      total: number
    }
  }>({ url: '/user/list', params })
}

export const getAdminRoleApi = (
  params: RoleParams
): Promise<IResponse<AppCustomRouteRecordRaw[]>> => {
  return request.get({ url: '/role/list', params })
}

export const getTestRoleApi = (params: RoleParams): Promise<IResponse<string[]>> => {
  return request.get({ url: '/role/list', params })
}
