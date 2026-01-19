<template>
    <div style="padding: 70px;">
        <h3>Create New Product</h3>
        <div style="margin-top: 15px;">
            <form class="form-create">
                <label>Nama Product:</label>
                <input style="height: 20px;" type="text" v-model="createData.name"/>
                <label>Link URL Picture:</label>
                <input style="height: 20px;" type="text" />
                <label>Price:</label>
                <input style="height: 20px;" type="number" v-model="createData.price" />
                <label>Qty:</label>
                <input style="height: 20px;" type="number" v-model="createData.qty"/>
                <label>Choice Category:</label>
                <select v-model="createData.category_id" style="height: 27px;">
                    <option v-for="category in dataCategory" :value="category.id">{{ category.category_name }}</option>

                </select>
            </form>
            <button @click="create()" type="button" class="btn-save">Save</button>
        </div>
    </div>
</template>

<script setup>
import api from '@/lib/api';
import { onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

onMounted(() => {
    getCategory()
})
const createData = reactive({
    name: "",
    price: "",
    qty: "",
    category_id: ""
})

const router = useRouter()
const dataCategory = ref([]);
const getCategory = (async () => {
    var result = await api.get('/category');
    dataCategory.value = result.data.category.data
})
const create = (async () => {
var createProduct = await api.post('/create-product',createData);
alert('product berhasil di buat');
router.push('/')
})

</script>