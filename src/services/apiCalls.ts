import { ApiResponse, ApiResponseSuccess, ApiResponseError } from "../interfaces"

// const local_ROOT = 'http://127.0.0.1:8000/api'
const ROOT = 'https://cardsbff-production.up.railway.app/api'

export const bringCards = async (order: string): Promise<ApiResponse> => {
  try {
    const response = await fetch(
      `${ROOT}/cards?sort=${order}`
    )

    const data: ApiResponse = await response.json()

    if (data.success) {
      return data as ApiResponseSuccess
    } else {
      return data as ApiResponseError
    }

  } catch (error) {
    console.log(error)
    return { success: false, error: 'Error occured while fetching the cards' }
  }
}