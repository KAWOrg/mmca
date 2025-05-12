<template>
    <div class="flex">
        <button @click="prevPage" :disabled="currentIndex === 0">&lt;</button>
        <transition-group name="slide" tag="div" class="flex" :class="gridClass">
            <div v-for="item in visibleItems" :key="item.placeId">
                <slot :item="item">
                    <img v-if="item.imageBytes" :src="'data:image/jpeg;base64,' + item.imageBytes" alt="편의시설 이미지" />
                    <h3>{{ item.placeNm }}</h3>
                    <div v-html="item.placeDscrp"></div>
                </slot>
            </div>
        </transition-group>
        <button @click="nextPage" :disabled="isLastPage">&gt;</button>
    </div>
</template>
<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
    items : {
        type: Array,
        default: () => []
    }
})

// 초기 설정(0부터)
const currentIndex = ref(0)

const cardsPerPage = computed(() => {
   // if (props.items.length === 0) return 3;
    const type = props.items[0]?.placeTypeCd;
    return type === '002' ? 2 : 3;
    // 문화시설이면 2개, 편의시설이면 3개 그리드
}) 

// 마지막 인덱스
const maxIdx = computed(()=> {
   return Math.max(0, props.items.length - cardsPerPage.value)
})

// 현재 보여줄 카드
const visibleItems = computed(() => {
    return props.items.slice(currentIndex.value, currentIndex.value + cardsPerPage.value)
})

// 마지막인지 아닌지 식별
const isLastPage = computed(() => {
    return currentIndex.value >= maxIdx.value
})


function nextPage() {
    if (!isLastPage.value) currentIndex.value++
}

function prevPage() {
    if (currentIndex.value > 0) currentIndex.value--
}

// 인덱스 초기화
watch(() => props.items, () =>  {
    currentIndex.value = 0
})


const gridClass = computed(() => {
    const type = props.items[0]?.placeTypeCd
    return type === '001' ? 'threeGrid' : 'twoGrid'
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

/* 애니메이션 추가 */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>