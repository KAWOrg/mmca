<template>
    <div>
        <h3>편의시설</h3>
        <FacilityGrid :items="ConvenienceList">
            <template #default="{ item }">
                <img v-if="item.imageBytes" :src="'data:image/jpeg;base64,' + item.imageBytes" alt="편의시설 이미지" />
                <img v-else :src="noImage" alt="기본 이미지" />
                <h3>{{ item.placeNm }}</h3>
                <div v-html="item.placeDscrp"></div>
            </template>
        </FacilityGrid >

        <h3>문화시설</h3>
        <FacilityGrid :items="CultureList">
            <template #default="{ item }">
                <img v-if="item.imageBytes" :src="'data:image/jpeg;base64,' + item.imageBytes" alt="편의시설 이미지" />
                <img v-else :src="noImage" alt="기본 이미지" />
                <div>
                    <h3>{{ item.placeNm }}</h3>
                    <div v-html="item.placeDscrp"></div>
                </div>
            </template>
        </FacilityGrid>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import FacilityGrid  from '@/components/common/card/FacilityGrid.vue';
import museumPlace from '@/api/museum/museumPlace'

const props = defineProps({
    musumInfo : {
        type: Object
    }
})

const ConvenienceList = ref([]) // ref는 proxy객체
const CultureList = ref([])

// 시설정보 받아서 분류
function getPlaceInfo(musumInfo) {
    museumPlace.placeInfo(musumInfo)
    .then((res) => {
        // Vue 3에서 ref()로 선언한 반응형 변수는 .value를 사용해야 접근 가능
        ConvenienceList.value = res.data.filter(i => i.placeTypeCd === '001')
        CultureList.value = res.data.filter(i => i.placeTypeCd === '002')
    })
}

// 컴포넌트가 마운트 될 때 실행(화면에 처음으로 등장할 때)
onMounted(() => {
    getPlaceInfo(props.musumInfo)
})

// musumInfo 값이 변경될 때마다 실행
watch(() => props.musumInfo, (newVal) => {
        getPlaceInfo(newVal)
    },
    { deep: true }
)  // 객체 내부 값 변경도 감지

const noImage = '/images/no_img.png';

</script>