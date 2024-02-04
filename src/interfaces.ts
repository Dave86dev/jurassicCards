export interface Card {
    Name: string
    Description: string
}
  
export interface AppState {
  msg: string
  order: string
  selected: Card
}

export interface ApiResponseSuccess {
  success: true
  message: string
  data: Card[]
}

export interface ApiResponseError {
  success: false
  error: string
}

export type ApiResponse = ApiResponseSuccess | ApiResponseError