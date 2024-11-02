<template>
    <div>
        배경으로 이미지 깔고

        가운데에 지역 선택 버튼
        <nav>
            <button @click="$emit('region', 'so')">서울</button>
            <button @click="$emit('region', 'gc')" >과천</button>
            <button @click="$emit('region', 'du')">덕수궁</button>
            <button @click="$emit('region', 'cj')">청주</button>
        </nav>

        오른쪽에 메뉴
        <nav>
            <router-link to="/main/exhbt">전시</router-link> |
            <router-link to="/main/edu">교육</router-link> |
            <router-link to="/main/evt">이벤트</router-link> |
            <router-link to="/main/dgtm">디지털미술관</router-link>
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
