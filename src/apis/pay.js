import request from '@/utils/http'

export const getOrderApi = (id) => {
  return request({
    url: `/member/order/${id}`
  })
}