<template>
  <div>
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
      <RouterView :musumList="musumList"/>
    </main>
    <FooterLayout :musumList="musumList"/>
  </div>
</template>

<script>
import { useMusumStore } from '@/stores/musumStore'
import museums from '@/api/museum/museums';
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
     async getMusumList() {

      const musumStore = useMusumStore();
      museums.getMuseums()
        .then((res) => {
          this.musumList = res // ① 기존 props용
          musumStore.setMusumList(res) // ② store에도 동시에 저장
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    data() {
      return {
        musumList: []
      }
    },
    created() { // 컴포넌트가 마운트 되기 직전 호출(render() 함수가 호출되기 직전)
      this.getMusumList()
    }
}
</script>