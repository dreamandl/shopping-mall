import request from '@/utils/http'


//获取详情的接口
export const getCheckInfoApi = () => {
  return request({
    url: '/member/order/pre'
  })
}