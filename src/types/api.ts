export namespace Login {
  export interface Params {
    username: string
    password: string
  }
}

export interface Result<T = any> {
  code: number
  msg: string
  data: T
}
