<template>
    <div>
        <h2>시설정보 관리</h2>
        <div>
            <button>서울</button>
            <button>과천</button>
            <button>덕수궁</button>
            <button>청주</button>
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
import { ref } from 'vue'
import AdminInfoForm from '@/components/admin/popup/InfoForm.vue'
import PreviewCard from '@/components/admin/PreviewCard.vue'

const title = ref('시설정보')
const popState = ref(false)

function openAddPlacePopup() {
    popState.value = !popState.value
}

</script>
<style scoped>
div {
    margin: 30px 0;
}
</style>