import { Login } from '@/types/api'
import request from '@/utils/request'

export default {
  login(params: Login.Params) {
    return request.post('/users/login', params)
  }
}
