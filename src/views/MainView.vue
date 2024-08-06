<template>
  <div class="infoWrap">
    <PrevInfo prevInfo="관람정보"/>{{ info }}
    <FloorInfo floorInfo="층별안내"/>
  </div>
</template>

<script>
// @ is an alias to /src
import mainPage from '@/api/mainPage';

import PrevInfo from '@/components/main/PrevInfo.vue'
import FloorInfo from '@/components/main/FloorInfo.vue'

export default {
  name: 'MainView',
  components: {
    PrevInfo,
    FloorInfo
  },
  props: {

   info : location.state
  },

}
</script>
