<template>
    <HeaderLayout></HeaderLayout>
    <MainView></MainView>
    <FooterLayout></FooterLayout>
</template>

<script>
import mainPage from '@/api/mainPage';
import MainView from './views/MainView.vue';
import FooterLayout from './components/layout/FooterLayout.vue';
import HeaderLayout from './components/layout/HeaderLayout.vue';

export default {
  name : 'Main',
  components: {
    MainView,
    FooterLayout,
    HeaderLayout
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