import request from '@/config/axios'
import { RuleForm, ListRes } from './types'
/**
 *
 * team-list interface
 */
export const getCoachListApi = (params: any): Promise<ListRes> => {
  return request.get({ url: '/api/coach/getList', params })
}
/**
 *
 * team - add interface
 */
export const addCoachAPi = (data: Partial<RuleForm>): Promise<IResponse> => {
  return request.post({ url: '/api/coach/add', data })
}
/**
 *
 * team  - update interface
 */
export const updateCoachApi = (data: Partial<RuleForm>): Promise<IResponse> => {
  return request.post({ url: '/api/coach/update', data })
}
/**
 *
 * team  - del interface
 */
export const delCoachApi = (data: any): Promise<IResponse> => {
  return request.post({ url: '/api/coach/delete', data })
}
/**
 *
 * team-list interface
 */
export const getTeamListApi = (params: any): Promise<ListRes> => {
  return request.get({ url: '/api/team/getList', params })
}
/**
 *
 * stadium-list interface
 */
export const getStadiumList = (): Promise<ListRes> => {
  return request.get({ url: 'api/stadium/list' })
}
