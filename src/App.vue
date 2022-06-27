<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <router-view></router-view>
</template>

<style>
* {
  box-sizing: border-box;
}

body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  height: 100%;
}


h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

/* 滚动槽 */
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background: #ededed;
}

/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(93, 94, 111, 0.1);
  -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.5);
  background: var(--el-color-primary-light-8);
}
</style>
