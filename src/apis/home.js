import httpInstance from '@/utils/http'

//获取banner

export function getBannerApi() {
  return httpInstance({
    url: '/home/banner'
  })
}