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
import FacilityGrid  from '@/components/common/card/FacilityGrid.vue';

const props = defineProps({
    ConvenienceList : {
        type: Array,
        default: () => []  // 기본값을 빈 배열로 설정, undefined 오류방지
    },
    CultureList: {
        type: Array,
        default: () => []
    }
})

const noImage = '/images/no_img.png';
</script>