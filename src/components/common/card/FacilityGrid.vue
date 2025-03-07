<template>
    <div class="flex">
        <div
            :class="[
                {'threeGrid' : item.placeTypeCd === '001'},
                {'twoGrid flex' : item.placeTypeCd === '002'}
            ]"
            v-for="item in items" :key="item.placeId">
            <slot :item="item">
                <img v-if="item.imageBytes" :src="'data:image/jpeg;base64,' + item.imageBytes" alt="편의시설 이미지" />
                <h3>{{ item.placeNm }}</h3>
                <div v-html="item.placeDscrp"></div>
            </slot>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    items : {
        type: Array,
        default: () => []
    }
})
</script>

<style>
.flex {
    display: flex;
}
.threeGrid img{
    width: 200px;
    height: 180px;
}
.twoGrid img{
    width: 200px;
    height: 300px;
}
</style>