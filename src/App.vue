<template>
  <nav>
    <router-link to="/">국립현대미술관</router-link>
  </nav>
  <nav>
    <router-link :to="{ name: 'seoul', state: this.musumList[0]}">서울</router-link> |
    <router-link to="/gc">과천</router-link> |
    <router-link to="/dsg">덕수궁</router-link> |
    <router-link to="/cj">청주</router-link>
  </nav>
  <!-- 미술관별 안내 뷰 -->
  <router-view></router-view>


  
  <!-- 페이지 이동할 네비바
  <nav>
    <router-link to="/exhibit">전시</router-link> |
    <router-link to="/edu">교육</router-link> |
    <router-link to="/event">이벤트</router-link> |
    <router-link to="/digital">디지털 미술관</router-link>
  </nav> -->
</template>

<script>
import mainPage from './api/mainPage';

export default {
  name : 'Main',
  methods: {
    // 미술관 목록 불러오기
   async getMusumList() {
      mainPage.getList()
      .then((res) => {
       this.musumList = res.data;
        for(let row of res.data) {
          console.log(row)
       }
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  data() {
    return {
      musumList: {
        musumCd: '',
        musumNm: '',
        musumTel: '',
        musumMailAddr: '',
        musumAddr:''
      },
    }
  },
  beforeMount() { // 컴포넌트가 마운트 되기 직전 호출(render() 함수가 호출되기 직전)
    this.getMusumList()
  }

  
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
