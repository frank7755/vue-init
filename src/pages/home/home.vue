<template>
    home
    <router-link to="/test">to test</router-link>
    <router-view></router-view>
</template>

<script setup lang='ts'>
import { RouterLink, RouterView } from 'vue-router';
</script>

<style lang='less' scoped>
</style>