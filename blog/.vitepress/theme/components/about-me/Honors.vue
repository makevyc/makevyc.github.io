<template>
  <p v-for="(item, idx) in honors" :key="idx">
    <b>&sdot;</b>
    {{ item }}
  </p>
</template>


<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  lang: 'cn' | 'en'
}>();

const data = {
  cn: {
    honors: [
      "暂无奖项信息",
    ],
  },
  en: {
    honors: [
      "No honors information yet",
    ],
  },
};

const honors = computed(() => data[props.lang].honors);

</script>
