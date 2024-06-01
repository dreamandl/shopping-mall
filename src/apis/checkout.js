import request from '@/utils/http'


//获取详情的接口
export const getCheckInfoApi = () => {
  return request({
    url: '/member/order/pre'
  })
}

// 创建订单
export const createOrderApi = (data) => {
  return request({
    url: '/member/order',
    method: 'POST',
    data
  })
}