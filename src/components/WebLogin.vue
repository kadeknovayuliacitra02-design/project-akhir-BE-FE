<template>
    <div class="login-wrapper">
        <div class="box-login">
            <p style="padding: 10px; background-color: #dddada;">Login</p>
            <hr />
            <form style="text-align: center; padding: 60px;">
                <div>
                    <label for="email">Email Adrees</label>
                    <input style="margin-left: 15px; padding: 5px; width: 235px;" type="email" v-model="dataLogin.email"
                        placeholder="Enter your email" />
                </div>
                <div style="padding-top: 15px;">
                    <label style="margin-left: 25px;" for="password">Password</label>
                    <input style="margin-left: 15px; padding: 5px; width: 235px;" type="password" v-model="dataLogin.password"
                        placeholder="Enter your password" />
                </div>
                <div style="margin-top: 15px;">
                    <input type="checkbox" name="agree" value="ceklis">Remember Me
                </div>
            </form>
            <div style="display: flex; margin-left: 163px; margin-top: -65px;">
                <button @click="login" type="button" class="btn-save">Login</button>
                <RouterLink to="/forget-password">
                    <p style=" margin-top: 24px; margin-left: 10px;">Forget your password?</p>
                </RouterLink>
            </div>
        </div>
    </div>
</template>
<script setup>
import api from '@/lib/api';
import { setToken } from '@/lib/token';
import { onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
const dataLogin = reactive ({
  email: "",
  password: "",
  tokenName: "qwerty12",
  isLogin: true
})
onMounted(() => {
fetchMe()

})
const router = useRouter();
const fetchMe =(async()=>{
    var userData = await api.get('/me');

})
const login = (async () =>{
    var loginData = await api.post('/login',dataLogin );
    setToken(loginData.data.data.token);
    router.push('/')
})
</script>