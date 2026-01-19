<template>
    <div class="dropdown">
        <div>
            <p>pengguna{{ profilleData.name }}</p>
        </div>
        <ul type="none" class="dropdown-content">
            <li>LogOut</li>
        </ul>
    </div>
</template>
<script setup>
import { ref } from 'vue';

let profilleData = ref({

})
</script>