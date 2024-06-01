// 封装所有和用户相关的接口函数
import request from '@/utils/http'

export const loginApi = ({ account, password }) => {
  return request({
    url: '/login',
    method: 'POST',
    data: {
      account,
      password
    }
  })
}

export const getLikeListApi = ({ limit = 4 }) => {
  return request({
    url: '/goods/relevant',
    params: {
      limit
    }
  })
}
