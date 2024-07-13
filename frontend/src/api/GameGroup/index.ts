import request from '@/config/axios'
import { RuleForm, ListRes } from './types'
/**
 *
 * team-list interface
 */
export const getGameListApi = (params: any): Promise<ListRes> => {
  return request.get({ url: '/api/game/getList', params })
}
/**
 *
 * team - add interface
 */
export const addGameAPi = (data: Partial<RuleForm>): Promise<IResponse> => {
  return request.post({ url: '/api/game/add', data })
}
/**
 *
 * team  - update interface
 */
export const updateGameApi = (data: Partial<RuleForm>): Promise<IResponse> => {
  return request.post({ url: '/api/game/update', data })
}
/**
 *
 * team  - del interface
 */
export const delGameApi = (data: any): Promise<IResponse> => {
  return request.post({ url: '/api/game/delete', data })
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
