<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <PrevInfo prevInfo="11"/>{{ info }}
    <FloorInfo floorInfo="층별안내"/>
  </div>
</template>

<script>
// @ is an alias to /src
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
  mounted() {
    console.log(this.info)
  }
}
</script>
