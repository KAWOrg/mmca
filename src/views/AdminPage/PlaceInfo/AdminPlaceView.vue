<template>
    <div>
        <h2>시설정보 관리</h2>
        <div>
            <button v-for="(item, index) in musumStore.musumList" :key="index" @click="getPlaceInfo(item.musumCd)">
                {{ item.musumNm }}
            </button>
        </div>
        <div>
            <PreviewCard/>
        </div>

        <div>
            <button @click="openAddPlacePopup()">+ 시설정보 추가</button>
        </div>

        <AdminInfoForm v-if="popState" @close="popState = false" :title="title"></AdminInfoForm>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import AdminInfoForm from '@/components/admin/popup/InfoForm.vue'
import PreviewCard from '@/components/admin/PreviewCard.vue'
import { useMusumStore } from '@/stores/musumStore'

const title = ref('시설정보')
const popState = ref(false)

const musumStore = useMusumStore();

// 시설정보 목록
function getPlaceInfo(musumCd) {
    console.log(musumCd || '001')
}

onMounted(() => {
   getPlaceInfo()
})

function openAddPlacePopup() {
    popState.value = !popState.value
}

</script>
<style scoped>
div {
    margin: 30px 0;
}
</style>