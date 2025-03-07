<template>
  <div class="MainPage">
    <HomeLayout @musumInfo="setMusumInfo" :musumList ="musumList"></HomeLayout>
    <PrevInfo :musumInfo="musumInfo"/>
    <FloorInfo floorInfo="층별안내"/>
    <PlaceInfo :ConvenienceList="ConvenienceList" :CultureList="CultureList" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeLayout from '@/views/MainPage/HomeLayout.vue'
import PrevInfo from '@/views/MainPage/PrevInfo.vue'
import FloorInfo from '@/views/MainPage/FloorInfo.vue'
import PlaceInfo from '@/views/MainPage/PlaceInfo.vue'
import museumPlace from '@/api/museum/museumPlace'

export default {
  name: 'MainView',
  components: {
    HomeLayout,
    PrevInfo,
    FloorInfo,
    PlaceInfo
  },
  // props: {
  //  info : location.state,
  // },
  props: {
    info: {
      type: Object,
      default: () => ({}),
    },
    musumList: {
      type: Array,
      required: true,
    },
  },
  data(){
    return{
      musumInfo: {},
      ConvenienceList: [],
      CultureList: []
    }
  },
  watch: { 
    musumList: {  // musumList가 들어오면 실행
      handler(newList) {  // musumList
        if(newList.length > 0) {
          this.musumInfo = newList[0];  // 첫번째 미술관 선택
        }
      },
      immediate: true // 컴포넌트가 생성될때 최초에 실행
    },
    musumInfo : {
      handler(musumInfo) {  // 현재 미술관 정보 들어오면 그 코드로 편의, 문화시설 조회
       // musumInfo
        museumPlace.placeInfo(musumInfo)
        .then((res) => {
          this.ConvenienceList = res.data.filter(i => i.placeTypeCd === '001')
          this.CultureList = res.data.filter(i => i.placeTypeCd === '002')
        })
      }
    }

  },
  methods:{
    setMusumInfo(musumInfo){
      this.musumInfo = musumInfo;
    }
  }

}
</script>
