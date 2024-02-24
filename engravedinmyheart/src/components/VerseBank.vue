<template>
  <div>
    <h1>Verse Bank</h1>

    <div v-if="error" class="bg-red-200 rounded p-5 w-[320px] text-red-800">{{ error }}</div>

    <div v-else-if="isFetching" class="bg-green-200 rounded p-5 w-[320px] text-green-800">
      Loading: {{ isFetching }}
    </div>

    <pre v-else class="w-[420px] p-5">{{ data }}</pre>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import authToken from '../../authToken'
import { onMounted, ref } from 'vue'
import { useFetch } from '@vueuse/core'

const authenicationToken = authToken

const verses = ref()
const verseID = ref()

const { isFetching, error, data } = useFetch(
  'https://api.baserow.io/api/database/rows/table/259126/?user_field_names=true',
  {
    headers: {
      Authorization: `Token ${authenicationToken}`
    }
  }
)

verses.value = data

console.log(verses)
</script>

<style scoped></style>
