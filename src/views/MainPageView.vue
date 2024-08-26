<template>
  <div class="MainPage">
    <MainPageHeader></MainPageHeader>
    <HomeLayout></HomeLayout>
    <PrevInfo prevInfo="관람정보"/>{{ info }}
    <FloorInfo floorInfo="층별안내"/>
  </div>
</template>

<script>
// @ is an alias to /src
import mainPage from '@/api/mainPage';

import MainPageHeader from '@/views/MainPage/MainPageHeader.vue'
import HomeLayout from '@/views/MainPage/HomeLayout.vue'
import PrevInfo from '@/views/MainPage/PrevInfo.vue'
import FloorInfo from '@/views/MainPage/FloorInfo.vue'

export default {
  name: 'MainView',
  components: {
    MainPageHeader,
    HomeLayout,
    PrevInfo,
    FloorInfo,
  },
  props: {

   info : location.state
  },

}
</script>
