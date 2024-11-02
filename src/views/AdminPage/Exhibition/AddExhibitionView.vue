<template>
    <h1>전시 등록</h1>

    <div>
        <div>
            <span>지역</span>
            <select name="" id="" @v-model= "exhbtInfo.region">
                <option default>선택</option>
                <option value="0">서울</option>
                <option value="1">과천</option>
                <option value="2">덕수궁</option>
                <option value="3">청주</option>
            </select>
        </div>

        <div>
            <span>전시명</span>
            <input type="text" @v-model="exhbtInfo.exhbtNm">
        </div>
        <div>
            <span>기간</span>
            <input type="date" @v-model="exhbtInfo.exhbtDate">
        </div>
        <div>
            <span>주최/후원</span>
            <input type="text" @v-model="exhbtInfo.exhbtSpon">
        </div>
        <div>
            <span>관람료</span>
            <input type="number" @v-model="exhbtInfo.exhbtFee">
        </div>
        <div>
            <span>관람정원</span>
            <input type="checkbox" id="online" @v-model="exhbtSpectator.checkBox"><label for="online">온라인 - {{ exhbtSpectator.spectator.onlineSpectator }}<span>명</span></label>
            <input type="checkbox" id="offline" @v-model="exhbtSpectator.checkBox"><label for="offline">오프라인 - {{ exhbtSpectator.spectator.offlineSpectator }}<span>명</span></label>
        </div>
        <div>
            <span>썸네일</span>
            <button>+ 첨부하기</button>
            <div>
                <div class="imgBox"><img src="" alt=""><button @click="fnDeleteThumbnailImg">X</button></div>
            </div>
        </div>
        <div>
            <span>전시품</span>
            <div>
                <div class="imgBox"><img src="" alt=""><button @click="fnDeleteExhbtItem">X</button></div>
                <button @click="fnAddExhbtItemPopup">+불러오기</button>
            </div>
        </div>
        <div>
            <span>내용</span>
            <textarea name="" id=""></textarea>
        </div>
    </div>
    
    <div>
        <button @click="fnCancle">취소</button>
        <button @click="fnAddExhbt">등록</button>
    </div>
</template>
<script setup>
import axios from "axios";
import { ref, watch } from 'vue';

const props = defineProps(['kind'])

const exhbtInfo = ref({
    region: null,
    exhbtNm: null,
    exhbtFee: null,
    exhbtDate: null,
    exhbtSpon: null,
    exhbtFee: null,

})

// 관람정원
const exhbtSpectator = ref({
    checkBox: [],
    spectator: {
        onlineSpectator: 0,
        offlineSpectator: 0
    }
})

// 썸네일 삭제
const fnDeleteThumbnailImg = () => {
    
}

// 전시품 삭제
const fnDeleteExhbtItem = () => {

}

// 전시품 불러오기(팝업 열기)
const fnAddExhbtItemPopup = () => {

}

// 전시품 등록 취소
const fnCancle = () => {

}

// 전시품 등록
const fnAddExhbt = () => {

}
</script>
<style>
.imgBox{
    width: 150px;
    height: 150px;
    border: 1px solid gray;
}
</style>