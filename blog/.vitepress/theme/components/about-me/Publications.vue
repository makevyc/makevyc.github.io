<template>
  <p v-for="(item, idx) in papers" :key="idx">[{{ idx + 1 }}] {{ item }}</p>
</template>


<script lang="ts" setup>

const _ = defineProps<{
  lang: 'cn' | 'en'
}>();

const papers = [
  "暂无发表论文",
];

</script>
