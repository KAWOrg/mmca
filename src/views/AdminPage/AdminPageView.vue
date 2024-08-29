<template>
  <nav>
    <router-link to="/admin/exhvt">전시관리</router-link>
    <button>전시품 관리</button>
    <button>교육 관리</button>
    <button>이벤트 관리</button>
    <button>디지털미술관 관리</button>
    <button>시설정보 관리</button>
    <button>사용자 관리</button>
  </nav>
  
</template>

<script>
import AdminExhibitionView from './AdminExhibitionView.vue'

export default {
  name : 'Admin',
  components: {
    AdminExhibitionView
  },
  methods:{
  },
  data() {
    return {
      // page : null
    }
  }
}


</script>