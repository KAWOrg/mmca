<template>
    <div>
        <div v-for="(item, index) in normalizedList" :key="index" @click="openModal(item)">
                <img v-if="item.imageBytes" :src="'data:image/jpeg;base64,' + item.imageBytes" alt="이미지" />
                <img v-else :src="noImage" alt="기본 이미지" />
                <h3>{{ item.title }}</h3>
                <p>{{ plainTextPreview[index] }}</p>
        </div>
    </div>

    <!-- 상세보기 팝업 -->
    <AdminInfoForm v-if="popState" @close="popState = false" :title="'시설정보'" :data="selectedItem" :mode="'view'"></AdminInfoForm>
</template> 
<script setup>
import { ref, computed } from 'vue'
import AdminInfoForm from '@/components/admin/popup/AdminInfoForm.vue'

const popState = ref(false)
const selectedItem = ref(null)

const props = defineProps({
    data : {
        type: Array
    }
})

// 필드값 통일
const normalizedList = computed(() => {
    return props.data.map(item => ({
        musumCd: item.musumCd,
        id: item.placeId || undefined,
        cd: item.placeTypeCd || undefined,
        title: item.placeNm || item.name || '제목 없음',
        imageFile: item.imgFile || item.imageFile || item.imageBytes || null,
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

function openModal(item) {
    selectedItem.value = item;
    popState.value = !popState.value;
}

const noImage = '/images/no_img.png';

</script>