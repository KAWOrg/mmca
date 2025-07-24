<template>
    <div>
        <h2>시설정보 관리</h2>
        <div>
            <button v-for="(item, index) in musumStore.musumList" :key="index" @click="getPlaceInfo(item)">
                {{ item.musumNm }}
            </button>
        </div>
        <div>
            <PreviewCard :data="placeList"/>
        </div>

        <div>
            <button @click="openAddPlacePopup()">+ 시설정보 추가</button>
        </div>

        <AdminInfoForm v-if="popState" @close="popState = false" :title="'시설정보'"></AdminInfoForm>
    </div>
</template>
<script setup>
import { ref, watch } from 'vue'
import { useMusumStore } from '@/stores/musumStore'
import AdminInfoForm from '@/components/admin/popup/AdminInfoForm.vue'
import PreviewCard from '@/components/admin/PreviewCard.vue'
import museumPlace from '@/api/museum/museumPlace'

const popState = ref(false)

const musumStore = useMusumStore();
let placeList = ref([]);

// 시설정보 목록
function getPlaceInfo(musumInfo) {

    museumPlace.placeInfo(musumInfo || musumStore.musumList[0])
    .then((res) => {
        placeList.value = res.data
       // console.log(res.data)
    })
    .catch(err => {
        console.error('에러 발생:', err)
    })
}

// musumStore.musumList 값 들어오면 초기 실행
watch(
    () => musumStore.musumList,  // ① 감시 대상: musumStore.musumList를 반환하는 함수
    (value) => {    // ② 값이 변할 때 실행될 함수
        if(value.length > 0) getPlaceInfo()
    },
    { immediate: true } // 컴포넌트가 생성될 때 즉시 실행
)

function openAddPlacePopup() {
    popState.value = !popState.value
}

</script>
<style scoped>
div {
    margin: 30px 0;
}
</style>