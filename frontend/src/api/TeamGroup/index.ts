import request from '@/config/axios'
import { RuleForm, ListRes } from './types'
/**
 *
 * team-list interface
 */
export const getTeamListApi = (params: any): Promise<ListRes> => {
  return request.get({ url: '/api/team/getList', params })
}
/**
 *
 * team - add interface
 */
export const addTeamAPi = (data: Partial<RuleForm>): Promise<IResponse> => {
  return request.post({ url: '/api/team/add', data })
}
/**
 *
 * team  - update interface
 */
export const updateTeamApi = (data: Partial<RuleForm>): Promise<IResponse> => {
  return request.post({ url: '/api/team/update', data })
}
/**
 *
 * team  - del interface
 */
export const delTeamApi = (data: any): Promise<IResponse> => {
  return request.post({ url: '/api/team/delete', data })
}
/**
 *
 * coach-list interface
 */
export const getCoachkv = (): Promise<ListRes> => {
  return request.get({ url: '/api/coach/kv' })
}
/**
 *
 * stadium-list interface
 */
export const getStadiumList = (): Promise<ListRes> => {
  return request.get({ url: 'api/stadium/list' })
}
