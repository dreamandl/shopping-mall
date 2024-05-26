import request from '@/utils/http'

export function getCategoryApi (id) {
  return request({
    url: '/category',
    params: {
      id
    }
  })
}