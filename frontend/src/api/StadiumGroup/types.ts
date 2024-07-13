export type RuleForm = {
  index: number
  stadium_id: number
  stadium_name: string
  std_size: number
  loaction: string
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
