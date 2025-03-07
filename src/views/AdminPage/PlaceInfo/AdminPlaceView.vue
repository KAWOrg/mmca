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
            PreviewCard.vue Area

        </div>

        <div>
            <button @click="openAddPlacePopup()">+ 시설정보 추가</button>
        </div>

        <AdminInfoForm v-if="popState" @close="popState = false" :title="title"></AdminInfoForm>
    </div>
</template>
<script>
import AdminInfoForm from '@/components/admin/popup/InfoForm.vue'

export default {
    name: 'admin-place',
    components: {
        AdminInfoForm
    },
    data() {
        return {
            title: '시설정보',
            popState : false
        }
    },
    methods: {
        openAddPlacePopup() {
            this.popState = !this.popState
        }
    }
}
</script>
<style scoped>
    div {
        margin: 30px 0;
    }
</style>