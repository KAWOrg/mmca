<template>
    <div>
        편의시설
        {{ ConvenienceList }}
    </div>
</template>
<script>
export default {
    props: {
        ConvenienceList : {
            type: Array
        }
    }
}
</script>