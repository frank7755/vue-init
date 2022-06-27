<template>
    <div>
        home1
        <router-link to="/home2">to home2</router-link>
        <router-view></router-view>
    </div>
</template>

<script setup lang='ts'>
import { RouterLink, RouterView } from 'vue-router';

</script>

<style lang='less' scoped>
</style>