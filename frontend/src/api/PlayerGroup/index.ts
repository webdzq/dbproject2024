import request from '@/config/axios'
import { RuleForm, ListRes } from './types'
/**
 *
 * team-list interface
 */
export const getPlayerListApi = (params: any): Promise<ListRes> => {
  return request.get({ url: '/api/player/getList', params })
}
/**
 *
 * team-list interface
 */
export const getPlayerSalaryListApi = (params: any): Promise<ListRes> => {
  return request.get({ url: '/api/playerSalary/getList', params })
}
/**
 *
 * team-list interface
 */
export const getPlayerMVPListApi = (params: any): Promise<ListRes> => {
  return request.get({ url: '/api/playerMVP/getList', params })
}
/**
 *
 * team - add interface
 */
export const addPlayerAPi = (data: Partial<RuleForm>): Promise<IResponse> => {
  return request.post({ url: '/api/player/add', data })
}
/**
 *
 * team  - update interface
 */
export const updatePlayerApi = (data: Partial<RuleForm>): Promise<IResponse> => {
  return request.post({ url: '/api/player/update', data })
}
/**
 *
 * team  - del interface
 */
export const delPlayerApi = (data: any): Promise<IResponse> => {
  return request.post({ url: '/api/player/delete', data })
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
/**
 *
 * stadium-list interface
 */
export const getPlayerDetailList = (params: any): Promise<ListRes> => {
  return request.get({ url: 'api/player/detail', params })
}
/**
 *
 * stadium-list interface
 */

export const delPlayerDetailApi = (data: any): Promise<IResponse> => {
  return request.post({ url: '/api/playerDetail/delete', data })
}
/**
 *
 * stadium-list interface
 */

export const addPlayerDetailApi = (data: any): Promise<IResponse> => {
  return request.post({ url: '/api/playerDetail/add', data })
}
/**
 *
 * stadium-list interface
 */

export const updatePlayerDetailApi = (data: any): Promise<IResponse> => {
  return request.post({ url: '/api/playerDetail/update', data })
}

/**
 *
 * player-list interface
 */
export const getPlayerkv = (): Promise<ListRes> => {
  return request.get({ url: '/api/player/kv' })
}
