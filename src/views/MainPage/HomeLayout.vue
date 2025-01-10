<template>
    <div>
        배경으로 이미지 깔고

        가운데에 지역 선택 버튼
        <nav>
            <button v-for="(item, index) in musumList" :key="index" @click="$emit('musumInfo', item)">
                {{ item.musumNm }}
            </button>
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
  props: {
    musumList: {
      type: Array,
      required: true
    }
  }
}


</script>
