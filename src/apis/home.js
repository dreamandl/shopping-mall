import httpInstance from '@/utils/http'

//获取banner

export function getBannerApi() {
  return httpInstance({
    url: '/home/banner'
  })
}

// 获取新鲜好物

export function findNewApi() {
  return httpInstance({
    url: '/home/new'
  })
}

//获取人气推荐

export function getHotApi() {
  return httpInstance({
    url: '/home/hot'
  })
}