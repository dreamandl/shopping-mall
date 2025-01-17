import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryApi } from '@/apis/layout';

export const useCategoryStore = defineStore('category', () => {
  //导航列表的数据管理
  //state导航列表管理
  const categoryList = ref([])

  //action 获取导航数据的方法
  const getCategory = async () => {
    const res = await getCategoryApi()
    categoryList.value = res.data.result
  }

  return {
    categoryList,
    getCategory
  }
})
