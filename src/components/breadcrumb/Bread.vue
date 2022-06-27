<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="(item, index) in path.pathList" :key="item"
            :to="index != path.pathList.length - 1 ? item.path : undefined">
            {{
                    item.name
            }}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup lang='ts'>
import routes from "../../../config/routes";
import { useRoute } from "vue-router";
import { reactive } from "vue";
import { onBeforeRouteUpdate } from 'vue-router'

const route = useRoute()
let path = reactive<any>({ pathList: [] });


const getPath = (path: string, menu: any, arr?: any, z?: any) => {
    arr = arr || [];
    z = z || 0;
    for (let i = 0; i < menu.length; i++) {
        let item = menu[i];
        arr[z] = item
        if (item.path == path) return arr.slice(0, z + 1);

        if (item.children && item.children.length) {
            let res: any = getPath(path, item.children, arr, z + 1)
            if (res) return res
        }
    }
}

path.pathList = getPath(route.path, routes).filter((item: any) => item.path != '/')

onBeforeRouteUpdate((to) => {
    path.pathList = getPath(to.path, routes).filter((item: any) => item.path != '/')
})



</script>

<style lang='less' scoped>
.el-breadcrumb {
    font-size: 14px;
    height: 30px;
    line-height: 30px;
    padding: 0 24px;
    z-index: 2;
    border-top: 1px solid #eee;
    background-color: #fff;
    box-shadow: 0 0 8px rgb(0 0 0 / 15%) inset;
}
</style>