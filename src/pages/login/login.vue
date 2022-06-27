<template>
    <div class="login">
        <div class="formBox">
            <div class="formLeft">
                <h2>后台管理系统</h2>
            </div>
            <div class="formRight">
                <h2>欢迎登录</h2>
                <el-form class="form" ref="formRef" :model="formLogin">
                    <el-form-item label="" prop="userName" :rules="[{ required: true, message: '请输入用户名' },]">
                        <el-input v-model="formLogin.userName" prefix-icon="user" placeholder="请输入用户名"
                            autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="" prop="password" :rules="[{ required: true, message: '请输入密码' },]">
                        <el-input prefix-icon="lock" type="password" autocomplete="off" v-model="formLogin.password"
                            placeholder="请输入密码"></el-input>
                    </el-form-item>
                    <el-form-item label="" prop="captcha" class="captchaItem"
                        :rules="[{ required: true, message: '请输入验证码' },]">
                        <el-input class="captchaInput" v-model="formLogin.captcha" prefix-icon="Picture"
                            autocomplete="off" placeholder="请输入验证码"></el-input>
                        <img src="@/assets/captcha.png" class="captcha" />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submit(formRef)" class="submit">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { reactive, ref } from 'vue';
import type { FormInstance } from 'element-plus'

const formRef = ref<FormInstance>()

type loginData = {
    userName: string,
    password: string,
    captcha: string
}
const formLogin = reactive<loginData>({
    userName: '',
    password: '',
    captcha: ''
})


const submit = (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    formEl.validate(valid => {
        if (valid) {

        } else {
            return false
        }
    })
}


</script>

<style lang='less' scoped>
.login {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to bottom right, rgb(0, 184, 163), rgb(2, 141, 180));
}

.formBox {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    min-width: 800px;
    width: 50%;
    height: 500px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 15px 6px rgba(0, 0, 0, .15);
}

.formLeft,
.formRight {
    width: 50%;
}

.formLeft {
    background: url('@/assets/login.gif') no-repeat center/100% 100%;
    height: 100%;
    padding-top: 50px;

    h2 {
        color: #fff;
        font-size: 24px;
        font-weight: normal;
    }
}

.formRight {
    padding-top: 60px;
    background-color: #fff;
    height: 100%;

    h2 {
        font-size: 24px;
        font-weight: normal;
    }
}

.form {
    padding: 48px 32px 0;
}

.submit {
    display: block;
    width: 100%;

}

.captchaItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.captchaInput {
    flex: 1;
}

.captcha {
    height: 32px;
    margin-left: 30px;
}
</style>
