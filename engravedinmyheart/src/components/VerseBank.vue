<template>
  <div>
    <h1>Verse Bank</h1>
    {{ verses }}
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import authToken from '../../authToken'
import { onMounted, ref } from 'vue'
import { useFetch } from '@vueuse/core'

const authenicationToken = authToken

const verses = ref([])

onMounted(async () => {
  const { data: verseData }: any = await useFetch(
    'https://api.baserow.io/api/database/rows/table/259126/?user_field_names=true',
    {
      headers: {
        Authorization: `Token ${authenicationToken}`
      }
    }
  )

  verses.value = verseData
  console.log(verseData)
})
</script>

<style scoped></style>
