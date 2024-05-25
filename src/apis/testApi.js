import httpInatance from '@/utils/http'

export function getCategory() {
  return httpInatance({
    url: 'home/category/head'
  })
}