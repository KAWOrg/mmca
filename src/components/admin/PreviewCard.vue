<template>
    <div>
        <h3>시설정보 카드</h3>
        <button v-for="(item, index) in PlaceList" :key="index">
            {{ item.placeNm }}
        </button>
    </div>
</template>
<script setup>
const props = defineProps({
    PlaceList : {
        type: Array
    }
})
</script>