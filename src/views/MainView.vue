<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <PrevInfo msg="국립현대미술관 for Vue.js"/>
    <FloorInfo />
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
  }
}
</script>
