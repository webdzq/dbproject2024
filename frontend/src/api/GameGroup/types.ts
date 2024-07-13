export type RuleForm = {
  index: number
  game_id: number
  game_season: string
  stadium_id: number
  team_home_id: number
  team_away_id: number
  stadium_name: string
  home_team: string
  away_team: string
  score_winner: number
  score_loser: number
  game_date: string
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
