<template>
  <div>
    <p>
      {{ description }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  lang: 'cn' | 'en'
}>();

const data = {
  cn: {
    description: `
          我对系统编程、高性能计算和开源项目有浓厚兴趣。喜欢探索Rust和C++的各种应用场景，关注最新的技术发展趋势。
        `,
  },
  en: {
    description: `
          I have a strong interest in system programming, high-performance computing, and open source projects. I enjoy exploring various application scenarios of Rust and C++, and keeping up with the latest technology trends.
        `,
  },
};

const description = computed(() => data[props.lang].description);
</script>


<style scoped>
div {
  text-align: center;
}
</style>
