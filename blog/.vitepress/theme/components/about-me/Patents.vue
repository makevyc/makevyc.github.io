<template>
    <p v-for="(item, idx) in patents" :key="idx">[{{ idx + 1 }}] {{ item }}</p>
</template>
  
  
<script lang="ts" setup>

const _ = defineProps<{
    lang: 'cn' | 'en'
}>();

const patents = [
    "暂无发明专利",
];

</script>
