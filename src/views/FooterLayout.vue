<template>
    <div style="margin-top: 100px;">
        로고자리<br>
        대표자: 김성희<br>
        사업자 등록번호: 138-83-00313<br>
        대표전화 : <span v-for="(musum, i) in musumList" :key="i">({{ musum.musumNm }}) {{ musum.musumTel }}<br></span>
        © 2021 National Museum of Modern and Contemporary Art, Korea
    </div>
</template>
<script>
export default {
    props: {
        musumList: {
            type: Array
        }
    }
}
</script>