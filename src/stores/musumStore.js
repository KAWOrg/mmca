import { defineStore } from 'pinia'

// 컴포넌트 전역에서 사용할 객체를 관리하는 store
export const useMusumStore = defineStore('musum', {
  state: () => ({
    musumList: []
  }),
  actions: {
    setMusumList(list) {
      this.musumList = list
    }
  }
})