<template>
    <div>
        <!-- 최상단 헤더- 국립현대미술관 로고, 마이페이지/회원가입 있을 자리 -->
        <nav>
            <router-link to="/">국립현대미술관</router-link>
        </nav>
    </div>

    <div>
        <!-- 헤더1 - 메인페이지 메뉴(이미지 있는것) -->
        <button v-for="(tab, index) in tabList" :key="index" @click="currentTagName = tab.tag">
            {{ tab.name }}
        </button>
        <nav>
            <router-link to="/exhvt">전시</router-link> |
            <router-link to="/edu">교육</router-link> |
            <router-link to="/evt">이벤트</router-link> |
            <router-link to="/dgtm">디지털미술관</router-link>
        </nav>
    </div>

    <div>
        <!-- 헤더2 - 지역 선택 후 메뉴(전시, 교육, 이벤트, 미술관 등등) -->
    </div>
</template>

<script>
export default {
    name : 'header',
    methods : {},
    data() {
      return {
        // App.vue에서 받아온 리스트로 메뉴 수정해야함
        currentTagName: "seoul",
        tabList: [
            {name : "서울", tag: "seoul"},
            {name : "과천", tag: "gc"},
            {name : "덕수궁", tag: "dsg"},
            {name : "디지털미술관", tag: "dgtm"}
        ],
        computed: {
            currentMenu() {
                return this.tabList.filter((el) => el.tag == this.currentTagName);
            }
        }

      }
    },
  }
</script>

