<template>
  <div class="hello">
    <h1>국립현대미술관 {{ musumInfo.musumNm }}</h1>
    
    <h3>관람 정보</h3>
  </div>
</template>

<script>
export default {
  name: 'PrevInfo',
  props: {
    musumInfo : {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
