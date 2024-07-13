export type RuleForm = {
  index: number
  season_id: number
  season_year: string
  mvp: string
  player_id: number
  champion_teamid: number
  mvp_player: string
  champion_team: string
}

export type MetaParmas = {
  total: number
  count?: number
  currentPage?: number
  per?: number
  totalPages?: number
}
export type TeamListRes = {
  meta: MetaParmas
  items: any[]
}
export type ListRes = {
  meta: MetaParmas
  items: any[]
}
// export type APKListRes = {
//   meta: MetaParmas
//   items: any[]
// }

// export type CreateApk = {
//   apkName: string
//   appName: string
//   pages: string
//   status?: string
// }

// export type ApkDetial = {
//   id: number
//   apkName: string
//   appName: string
//   pages: string[]
//   online: string
//   createdBy: string
//   updatedBy: string
//   createdTime: string
//   updatedTime: string
//   logList?: LogList[]
// }

// export type UpdateReq = {
//   id: number
//   appName: string
//   pages: string[]
// }

// export type LogList = {
//   newData: string
//   oldData: string
//   opUser: string
//   updatedTime: string
// }
