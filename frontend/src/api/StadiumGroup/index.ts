import request from '@/config/axios'
import { RuleForm, ListRes } from './types'
/**
 *
 * team-list interface
 */
export const getStadiumListApi = (params: any): Promise<ListRes> => {
  return request.get({ url: '/api/stadium/getList', params })
}
/**
 *
 * team - add interface
 */
export const addStadiumAPi = (data: Partial<RuleForm>): Promise<IResponse> => {
  return request.post({ url: '/api/stadium/add', data })
}
/**
 *
 * team  - update interface
 */
export const updateStadiumApi = (data: Partial<RuleForm>): Promise<IResponse> => {
  return request.post({ url: '/api/stadium/update', data })
}
/**
 *
 * team  - del interface
 */
export const delStadiumApi = (data: any): Promise<IResponse> => {
  return request.post({ url: '/api/stadium/delete', data })
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
