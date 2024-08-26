<template>
  <div class="MainPage">
    <HomeLayout @region="setRegion" ></HomeLayout>
    <PrevInfo :region="this.region"/>{{ region }}
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
  props: {

   info : location.state

  },
  data(){
    return{
      region: ''
    }
  },
  methods:{
    setRegion(region){
      this.region = region;
    }
  }

}
</script>
