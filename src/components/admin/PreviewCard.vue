<template>
    <div>
        <div v-for="(item, index) in normalizedList" :key="index">
                <img v-if="item.imageBytes" :src="'data:image/jpeg;base64,' + item.imageBytes" alt="이미지" />
                <img v-else :src="noImage" alt="기본 이미지" />
                <h3>{{ item.title }}</h3>
                <p>{{ plainTextPreview[index] }}</p>
        </div>
    </div>
</template> 
<script setup>
import { computed } from 'vue'

const props = defineProps({
    data : {
        type: Array
    }
})

// 필드값 통일
const normalizedList = computed(() => {
    return props.data.map(item => ({
        title: item.placeNm || item.name || '제목 없음',
        description: item.placeDscrp || item.desc || '설명 없음'
    }))
})

// HTML 태그 제거 + 일부만 자르기
const plainTextPreview = computed(() => {
    return normalizedList.value.map(i => {
        const html = i.description || ''
        const textOnly = html.replace(/<[^>]+>/g, '') // 태그 제거

        return textOnly.length > 20 ? textOnly.slice(0, 20) + '...' : textOnly
    })
})

const noImage = '/images/no_img.png';

</script>