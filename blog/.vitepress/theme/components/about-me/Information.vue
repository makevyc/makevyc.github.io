<template>
  <div v-if="props.lang === 'cn'">
    <p>
      我是一名专注于Rust和C++开发的程序员，对系统编程和高性能计算有浓厚兴趣。
    </p>
    <p>
      <i class="icon ion-university"></i> 昆明理工大学 计算机相关专业
    </p>
    <p>
      <i class="icon ion-code"></i> 主要技术栈：Rust、C++、Linux、Git
    </p>
    <p>
      <i class="icon ion-location"></i> 居住地：广东深圳
    </p>
    <p>
      <i class="icon ion-social-github"></i> GitHub: <a href="https://github.com/makevyc" target="_blank">makevyc</a>
    </p>
  </div>
  <div v-else>
    <p>
      I am a programmer focused on Rust and C++ development, with a strong interest in system programming and high-performance computing.
    </p>
    <p>
      <i class="icon ion-university"></i> Kunming University of Science and Technology
    </p>
    <p>
      <i class="icon ion-code"></i> Tech Stack: Rust, C++, Linux, Git
    </p>
    <p>
      <i class="icon ion-location"></i> Location: Shenzhen, Guangdong, China
    </p>
    <p>
      <i class="icon ion-social-github"></i> GitHub: <a href="https://github.com/makevyc" target="_blank">makevyc</a>
    </p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  lang: 'cn' | 'en'
}>();

</script>
