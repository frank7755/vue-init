<template>
    <el-container style="height:100%;overflow:hidden">
        <el-aside width="256px">
            <div class="logoBox">
                <img :src="logo" v-if="logo" class="logo" />
                vue3后台管理
            </div>
            <el-scrollbar style="height:calc(100% - 60px)">
                <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo"
                    default-active="2" text-color="#fff">
                    <el-sub-menu index="1">
                        <template #title>
                            <el-icon>
                                <location />
                            </el-icon>
                            <span>Navigator One</span>
                        </template>
                        <el-sub-menu index="1-4">
                            <template #title>item four</template>
                            <el-menu-item index="1-4-1">item one</el-menu-item>
                        </el-sub-menu>
                    </el-sub-menu>
                    <el-menu-item index="2">
                        <el-icon>
                            <Menu />
                        </el-icon>
                        <span>Navigator Two</span>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>
                        <el-icon>
                            <document />
                        </el-icon>
                        <span>Navigator Three</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <el-icon>
                            <setting />
                        </el-icon>
                        <span>Navigator Four</span>
                    </el-menu-item>
                </el-menu>
            </el-scrollbar>
        </el-aside>
        <el-container>
            <el-header>
                <div class="headerLeft"></div>
                <div class="headerRight">
                    <div class="userInfo">
                        <el-avatar size="small" style="margin-right:10px"
                            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                        <span>测试人员</span>
                    </div>
                </div>
            </el-header>
            <Bread />
            <el-main>
                <div class="content">
                    <router-view></router-view>
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang='ts'>
import logo from '@/assets/logo.png'
import { RouterView } from 'vue-router';
import Bread from '@/components/breadcrumb/Bread.vue'

</script>

<style lang='less' scoped>
.logoBox {
    line-height: 60px;
    height: 60px;
    text-align: center;
    border-bottom: 1px solid #666;
    font-size: 20px;
    color: #fff;
    background-color: rgb(84, 92, 100)
}

.logo {
    width: 40px;
    height: 40px;
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
    margin-top: -3px;
}


.el-aside {
    box-shadow: 0 2px 10px rgba(0, 0, 0, .15);
    background-color: rgb(84, 92, 100)
}

.el-header {
    line-height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .headerLeft {
        flex: 1;
    }

    .headerRight {
        .userInfo {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-size: 14px;
            padding: 0 15px;
        }
    }
}

.el-menu {
    border: none;
}


.content {
    background-color: #fff;
    width: 100%;
    height: 100%;
    min-height: 600px;
}
</style>