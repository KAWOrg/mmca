<template>
    <div>
        배경으로 이미지 깔고
        오른쪽에 메뉴넣고

        가운데에 지역 선택 버튼

        <nav>
            <button @click="$emit('region', 'so')">서울</button>
            <button @click="$emit('region', 'gc')" >과천</button>
            <button @click="$emit('region', 'du')">덕수궁</button>
            <button @click="$emit('region', 'cj')">청주</button>
        </nav>
    </div>
</template>
<script>
export default {
  name: 'MainView',
  data(){
    return {
        region : '',

    }
  },
  methods: {
      changeMain(region){
          this.region = region;

          this.$emit("region", region);
      },

  }
}


</script>
