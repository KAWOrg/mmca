<template>
    <div>
        <h1>
            전시 관리
        </h1>
        <div>
            <router-link to="/admin/exhbt/addExhbt" >전시추가</router-link>
        </div>
        <table>
            <tr>
                <td></td>
            </tr>
        </table>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const addExhbYN = ref(false)

</script>