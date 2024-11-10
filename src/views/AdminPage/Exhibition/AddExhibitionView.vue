<template>
    <h1>전시 등록</h1>

    <div>
        <div>
            <span>미술관</span>
            <select name="" id="" v-model= "exhbtInfo.musumCd">
                <option default>선택</option>
                <option value="001">서울</option>
                <option value="002">과천</option>
                <option value="003">덕수궁</option>
                <option value="004">청주</option>
            </select>
        </div>

        <div>
            <span>전시명</span>
            <input type="text" v-model="exhbtInfo.prgrmTitle">
        </div>
        <div>
            <span>기간</span>
            <input type="date" v-model="exhbtInfo.prgrmStrtDt"> ~ <input type="date" v-model="exhbtInfo.prgrmEndDt">
        </div>
        <div>
            <span>주최/후원</span>
            <input type="text" v-model="exhbtInfo.prgrmHost">
        </div>
        <div>
            <span>관람료</span>
            <input type="number" v-model="exhbtInfo.prgrmPrice">
        </div>
        <div>
            <span>관람정원</span>
            <label for="online">온라인 - <input type="number" v-model="exhbtSpectator.onlineMaxPtcp"><span>명</span></label>
            <label for="offline">오프라인 - <input type="number" v-model="exhbtSpectator.maxPtcp"><span>명</span></label>
        </div>
        <div>
            <span>썸네일</span>
            <input type="file"/>
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

const BASE_URL = '/api/musumAdminInfo';

// 전시 등록 정보
const exhbtInfo = ref({
    prgrmId: 1,
    musumCd: null,
    prgrmTitle: null,
    prgrmPrice: null,
    prgrmStrtDt: null,
    prgrmEndDt: null,
    prgrmHost: null,
})

// 관람정원
const exhbtSpectator = ref({
    onlineMaxPtcp: 0,
    maxPtcp: 0
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
const fnAddExhbt = async () => {

    let param = {...exhbtInfo.value, ...exhbtSpectator.value}
    await axios.post(BASE_URL+'/addExhb', param).then((res) => {
        console.log(res);
        
        // if(response) alert("전시가 등록되었습니다.")
        // else{  
        //     console.error('Error fetching the list:', res.error);
        //     alert("전시가 등록 중 오류가 발생했습니다.")
        // }
    })
}
</script>
<style>
.imgBox{
    width: 150px;
    height: 150px;
    border: 1px solid gray;
}
</style>