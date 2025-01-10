<template>
  <div class="MainPage">
    <HomeLayout @musumInfo="setMusumInfo" :musumList ="musumList" ></HomeLayout>
    <PrevInfo :musumInfo="musumInfo"/>{{ musumInfo.musumNm }}
    <FloorInfo floorInfo="층별안내"/>
  </div>
</template>

<script>
// @ is an alias to /src
import mainPage from '@/api/mainPage';

import HomeLayout from '@/views/MainPage/HomeLayout.vue'
import PrevInfo from '@/views/MainPage/PrevInfo.vue'
import FloorInfo from '@/views/MainPage/FloorInfo.vue'

export default {
  name: 'MainView',
  components: {
    HomeLayout,
    PrevInfo,
    FloorInfo,
  },
  // props: {
  //  info : location.state,
  // },
  props: {
    info: {
      type: Object,
      default: () => ({}),
    },
    musumList: {
      type: Array,
      required: true,
    },
  },
  data(){
    return{
      musumInfo: {}
    }
  },
  methods:{
    setMusumInfo(musumInfo){
      this.musumInfo = musumInfo;
    }
  }

}
</script>
