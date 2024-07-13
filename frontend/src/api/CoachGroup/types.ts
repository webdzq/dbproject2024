export type RuleForm = {
  index: number
  coach_id: number
  coach_name: string
  nationality: string
  start_year: number
  num_champion: number
  team_name: string
}

export type MetaParmas = {
  total: number
  count?: number
  currentPage?: number
  per?: number
  totalPages?: number
}
export type ListRes = {
  meta: MetaParmas
  items: any[]
}
