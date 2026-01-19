<template>
    <div class="register-wrapper">
        <div class="box-register">
            <p style="padding: 10px; background-color: #dddada;">Register</p>
            <hr />
            <form style="text-align: center; padding: 60px;">
                <div>
                    <label style="margin-left: 73px;">Name</label>
                    <input style="margin-left: 15px; padding: 5px; width: 235px;" type="text" placeholder="Enter your name" v-model="dataRegister.name"/>
                </div>
                <div style="padding-top: 15px;">
                    <label style="margin-left: 25px;" for="password">Email Adrees</label>
                    <input style="margin-left: 15px; padding: 5px; width: 235px;" type="email" placeholder="Enter your email" v-model="dataRegister.email"/>
                </div>
                <div style="padding-top: 15px;">
                    <label style="margin-left: 50px;" for="password">Password</label>
                    <input style="margin-left: 15px; padding: 5px; width: 235px;" type="password" placeholder="Enter your password" v-model="dataRegister.password"/>
                </div>
                <div style="padding-top: 15px;">
                    <label style="margin-left: -6px;" for="password">Confirm Password</label>
                    <input style="margin-left: 15px; padding: 5px; width: 235px;" type="password" placeholder="Enter your password" v-model="dataRegister.confirmationPassword" />
                </div>
            </form>
            <div style="display: flex; margin-left: 266px; margin-top: -65px;">
                <button @click="register()" type="button" class="btn-save">Register</button>
                
            </div>
        </div>
    </div>
</template>
<script setup>
import api from '@/lib/api';
import { setToken } from '@/lib/token';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
    const router = useRouter()
    const dataRegister = reactive({
        name: "",
        email: "",
        password: "",
        confirmationPassword: "",
        tokenName: "qwerty12"
    });
    const register = (async()=>{
       var registerData = await api.post('/register',dataRegister);
        setToken(registerData.data.data.token);
        router.push('/login');
    })

</script>