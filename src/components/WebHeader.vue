<template>
    <header class="bg-header">
        <div v-if="!isLogin" class="header-text">
            <RouterLink class="link-page" to="/">
                <p>List</p>
            </RouterLink>
            <RouterLink class="link-page" to="/login">
                <p style="margin-left: 20px">Login</p>
            </RouterLink>
            <RouterLink class="link-page" to="/register">
                <p style="margin-left: 20px">Register</p>
            </RouterLink>
        </div>
        <div v-else style="text-align: right; padding: 10px;">
            <div class="dropdown" style="    margin-top: -5px; margin-right: 30px;">
                <h3>{{ profilleData.name }}</h3>

                <ul type="none" class="dropdown-content">
                    <li @click="LogOut()" ><b>LogOut</b></li>
                </ul>
            </div>
        </div>
    </header>
</template>
<script setup>
import api from '@/lib/api';
import { onMounted, ref } from 'vue';
import ProfileMenu from './ProfileMenu.vue';
import { clearToken } from '@/lib/token';
import router from '@/router';
import { useRouter } from 'vue-router';

onMounted(() => {
    fetchMe()
})
// const router = useRouter();
const isLogin = ref(false)
let profilleData = ref({

})
const fetchMe = (async () => {
    var userData = await api.get('/me');
    profilleData.value = userData.data.user;
    if (profilleData) {
        isLogin.value = true
    }
})

const LogOut = (async () => {
    var logoutData = await api.post('/logout');
    clearToken();
    router.push('/login')
})
</script>