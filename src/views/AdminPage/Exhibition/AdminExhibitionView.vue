<template>
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

</template>

<script setup>
import { ref } from 'vue';
import axios from "axios";

const addExhbYN = ref(false)

// const test = async () => {
//   try {
//       const response = await axios.get('/api/musumInfo/getMusumList');
//       return response.data;
//   } catch (error) {
//       console.error('Error fetching the list:', error);
//       throw error;
//   }
// }

</script>