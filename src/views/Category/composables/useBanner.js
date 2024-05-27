// 封装banner轮播图相关的业务代码

import { ref, onMounted } from 'vue'
import { getBannerApi } from '@/apis/home'

export function useBanner() {
  const bannerList = ref([])

  const getBanner = async () => {
    const res = await getBannerApi()
    console.log(res)
    bannerList.value = res.data.result
  }

  onMounted(() => getBanner())

  return {
    bannerList
  }
}