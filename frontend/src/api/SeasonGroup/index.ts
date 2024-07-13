import request from '@/config/axios'
import { RuleForm, ListRes } from './types'
/**
 *
 * team-list interface
 */
export const getSeasonListApi = (params: any): Promise<ListRes> => {
  return request.get({ url: '/api/season/getList', params })
}
/**
 *
 * team - add interface
 */
export const addSeasonAPi = (data: Partial<RuleForm>): Promise<IResponse> => {
  return request.post({ url: '/api/season/add', data })
}
/**
 *
 * team  - update interface
 */
export const updateSeasonApi = (data: Partial<RuleForm>): Promise<IResponse> => {
  return request.post({ url: '/api/season/update', data })
}
/**
 *
 * team  - del interface
 */
export const delSeasonApi = (data: any): Promise<IResponse> => {
  return request.post({ url: '/api/season/delete', data })
}
/**
 *
 * coach-list interface
 */
export const getPlayerkv = (): Promise<ListRes> => {
  return request.get({ url: '/api/player/kv' })
}
/**
 *
 * stadium-list interface
 */
export const getStadiumList = (): Promise<ListRes> => {
  return request.get({ url: 'api/stadium/list' })
}
