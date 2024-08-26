<template>
  <div class="hello">
    <h1>{{ region }}</h1>
    
    <h3>관람 정보</h3>
  </div>
</template>

<script>
export default {
  name: 'PrevInfo',
  props: {
    region : String
  }
}
</script>
