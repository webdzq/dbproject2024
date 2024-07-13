export type RuleForm = {
  index: number
  player_id: number
  name: string
  age: string
  jersey_number: number
  team_name: string
  guard_position: string
  height: string
  weight: string
  last_attended: string
  country: string
  salary: string
  introduce: string
  mvp_times: number
}
export type RuleDetailForm = {
  player_id: ''
  game_id: ''
  team_id: ''
  game_played_count: ''
  min_played: ''
  points: ''
  field_goals_made: ''
  field_goals_attempted: ''
  field_goals_percentage: ''
  number_3_points_goal_made: ''
  number_3_points_goal_attempted: ''
  number_3_points_goal_percentage: ''
  free_throws_made: ''
  free_throws_attempted: ''
  free_throw_percentage: ''
  offensive_rebounds: ''
  defensive_rebounds: ''
  assists: ''
  turnovers: ''
  steels: ''
  blocks: ''
  personal_fouls: ''
  fantacy_points: ''
  doubles_doubles: ''
  triple_doubles: ''
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
