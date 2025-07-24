<template>
    <div>
        <div>
            <h3>{{ title }} 상세조회</h3>{{ data }}
            <button @click="$emit('close')">X</button>
        </div>
        <div>
            <div>
                <div>
                    <img v-if="thumbnail" :src="thumbnail" alt="미리보기 이미지">
                    <span v-else>이미지를 선택하세요</span>
                </div>
                
                <input type="file" accept="image/*" @change="previewImage" ref="fileInput">
                <button @click="clearImg()">삭제</button>
            </div>
            <div>
                <ul>
                    <li>
                        *미술관명: 
                        <span v-if="data">{{ data.musumCd }}</span>
                        <select v-else v-model="placeInfo.musumCd">
                            <option value="">선택</option>
                            <option value="001">서울</option>
                            <option value="002">과천</option>
                            <option value="003">덕수궁</option>
                            <option value="004">청주</option>
                        </select>
                    </li>
                    <li>
                        *시설종류:
                        <span v-if="data">{{ data.cd }}</span>
                        <select v-else v-model="placeInfo.placeTypeCd">
                            <option value="">선택</option>
                            <option value="001">편의시설</option>
                            <option value="002">문화시설</option>
                        </select>
                    </li>
                    <li>
                        *시설명: <span v-if="data">{{ data.title }}</span>
                        <input v-else type="text" v-model="placeInfo.placeNm">
                    </li>
                    <li>
                        <TiptapEditor v-model="placeInfo.editorContent" />
                    </li>
                </ul>
                <button @click="uploadPlaceInfo()">입력 완료</button>
            </div>
        </div>    
    </div>
</template>
<script>
import museumPlace from '@/api/museum/museumPlace';
import TiptapEditor from '@/components/common/TiptapEditor.vue'
import { ref, reactive, nextTick } from 'vue'

export default {
    components: {
        TiptapEditor
    },
    props : {
        title : { type: String },
        data : { type: Object }
    },

    setup() {
        const thumbnail = ref(null)
        const fileInput = ref(null);  // 파일 input 요소 접근용 ref

        const placeInfo = reactive({
            musumCd: '', 
            placeTypeCd: '',
            placeNm: '',
            editorContent: '',
            imgFile: null   // 실제 업로드할 파일
        })

        // 첨부한 사진 바뀔때마다 미리보기 변경
        const previewImage = (evt) => {
            const file = evt.target.files[0];
            console.log(file)
            if(file) {
                // db에 저장할 파일
                placeInfo.imgFile = file;

                const reader = new FileReader();
                // 1. 파일을 다 읽으면 실행될 함수 설정
                reader.onload = e => {
                    thumbnail.value = e.target.result; 
                }
                // 2. onload 이벤트를 발생시키는 트리거
                // 여기서 파일을 읽어야 1이 실행됨
                reader.readAsDataURL(file); // 파일을 Base64로 변환
            }
        }
        // 썸네일 초기화
        const clearImg = () => {
            thumbnail.value = null;
            fileInput.value.value = ""; // input 필드 초기화
            placeInfo.imgFile = null;   // 파일 데이터 삭제
        }

        const uploadPlaceInfo = async () => {

            const formData = new FormData();
            
            formData.append("musumCd", placeInfo.musumCd);
            formData.append("placeTypeCd", placeInfo.placeTypeCd);
            formData.append("placeNm", placeInfo.placeNm);
            formData.append("placeDscrp", placeInfo.editorContent);
            if (placeInfo.imgFile) {
                formData.append("imageFile", placeInfo.imgFile);
            }

            try {
                const result = await museumPlace.uploadPlace(formData)
                console.log("업로드 성공:", result);
            } catch (error) {
                console.error("업로드 실패:", error);
            }
        };

        return {
            thumbnail,
            fileInput,
            placeInfo,
            previewImage,
            clearImg,
            uploadPlaceInfo
        }
    }
}
</script>
<style scoped>
    img {
        width: 150px;
        height: 150px;
    }
</style>