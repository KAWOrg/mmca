<template>
  <HeaderLayout></HeaderLayout>
  <nav>
    <RouterLink to="/">MainPage</RouterLink>
    <RouterLink to="/myPage">MyPage</RouterLink>
    <RouterLink to="/admin">AdminPage</RouterLink>
  </nav>
  <!-- <MainPage></MainPage>
  <MyPage></MyPage>
  <AdminPage></AdminPage> -->

  <main>
    <RouterView />
  </main>
  <FooterLayout></FooterLayout>
</template>

<script>
import mainPage from '@/api/mainPage';
import MainPage from './views/MainPageView.vue';
import MyPage from './views/MyPageView.vue';
// import AdminPage from './views/AdminPage/AdminPageView.vue';
import FooterLayout from './views/FooterLayout.vue';
import HeaderLayout from './views/HeaderLayout.vue';

export default {
  name : 'Main',
  components: {
    MainPage,
    MyPage,
    // AdminPage,
    HeaderLayout,
    FooterLayout
  },
  methods: {
      // 미술관 목록 불러오기 -> 헤더, 메인 컴포넌트로 보내기
    //  async getMusumList() {
    //     mainPage.getList()
    //     .then((res) => {
    //      this.musumList = res.data;
    //       for(let row of res.data) {
    //         console.log(row)
    //      }
    //     }).catch((err) => {
    //       console.log(err)
    //     })
    //   }
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
    //  this.getMusumList()
    }
}
</script>