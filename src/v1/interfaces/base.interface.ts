export interface BaseResponse {
    status: string
    code: number
    data?: any
    message?: string
}

export interface IdDTO  {
    id: number
}